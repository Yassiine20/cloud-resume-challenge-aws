import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  if (!count) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 right-4 glass-card px-4 py-2 flex items-center gap-2 text-sm z-50"
    >
      <svg className="w-4 h-4 text-[#00FFFF]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
      <span className="text-gray-400">
        {loading ? (
          <span className="animate-pulse">...</span>
        ) : (
          <>
            <span className="text-white font-medium">{count.toLocaleString()}</span> visitors
          </>
        )}
      </span>
    </motion.div>
  );
}