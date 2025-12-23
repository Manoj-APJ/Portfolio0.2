import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
    const [count, setCount] = useState(124); // Starting mock count

    useEffect(() => {
        // Mock logic: check local storage or increment
        const stored = localStorage.getItem('visitorCount');
        if (stored) {
            setCount(parseInt(stored) + 1);
            localStorage.setItem('visitorCount', (parseInt(stored) + 1).toString());
        } else {
            localStorage.setItem('visitorCount', '124');
        }
    }, []);

    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-dark rounded-full text-xs font-bold shadow-neo-sm opacity-80 hover:opacity-100 transition-opacity cursor-help" title="Total Visitors">
            <Eye className="w-3 h-3" />
            <span>{count.toLocaleString()} Visitors</span>
        </div>
    );
};
