// server.ts - Next.js Standalone + Socket.IO with Debug Logs
import { setupSocket } from '@/lib/socket';
import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const currentPort = 4000;
const hostname = 'localhost'; // safer for local testing

async function createCustomServer() {
  console.log('🟢 Starting custom server...');

  try {
    const nextApp = next({
      dev,
      dir: process.cwd(),
      conf: dev ? undefined : { distDir: './.next' },
    });

    console.log('📦 Initializing Next.js...');
    await nextApp.prepare();
    console.log('✅ Next.js is ready.');

    const handle = nextApp.getRequestHandler();

    console.log('🌐 Creating HTTP server...');
    const server = createServer((req, res) => {
      if (req.url?.startsWith('/api/socketio')) {
        return; // handled by Socket.IO
      }
      handle(req, res);
    });

    console.log('🔌 Setting up Socket.IO...');
    try {
      const io = new Server(server, {
        path: '/api/socketio',
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
        },
      });

      setupSocket(io);
      console.log('✅ Socket.IO setup complete.');
    } catch (socketError) {
      console.error('❌ Error setting up Socket.IO:', socketError);
    }

    console.log('🚀 Starting server...');
    server.listen(currentPort, hostname, () => {
      console.log(`✅ Server is running at: http://${hostname}:${currentPort}`);
      console.log(`📡 Socket.IO endpoint: ws://${hostname}:${currentPort}/api/socketio`);
    });

  } catch (err) {
    console.error('❌ Server startup error:', err);
    process.exit(1);
  }
}

createCustomServer();
