import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LaptopLoaderProps {
    onComplete: () => void;
}

export const LaptopLoader: React.FC<LaptopLoaderProps> = ({ onComplete }) => {
    const [terminalText, setTerminalText] = useState('manoj@sys:~$ init_');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Sequentially flash terminal lines on the laptop screen
        const timer1 = setTimeout(() => {
            setTerminalText('manoj@sys:~$ load_modules\n[ OK ] Fullstack core\n[ OK ] AI pipelines');
        }, 180);

        const timer2 = setTimeout(() => {
            setTerminalText('manoj@sys:~$ boot_portfolio\nBooting Manoj Mannam...');
        }, 360);

        const timer3 = setTimeout(() => {
            setTerminalText('Welcome Manoj.');
        }, 550);

        const timer4 = setTimeout(() => {
            setIsVisible(false);
            // Give time for fade out animation before triggering parent complete
            setTimeout(onComplete, 200);
        }, 700);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FCFBF7] select-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    {/* Laptop animation container */}
                    <motion.div
                        className="flex flex-col items-center justify-center"
                        initial={{ scale: 0.15, rotate: -20, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} // smooth cubic bezier
                    >
                        {/* Screen */}
                        <div className="relative w-56 h-36 md:w-72 md:h-46 bg-[#121214] rounded-t-xl border-4 border-zinc-700 flex flex-col p-3.5 shadow-2xl">
                            {/* Webcam dot */}
                            <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-600" />
                            
                            {/* Terminal text */}
                            <pre className="font-mono text-[9px] md:text-[10px] text-emerald-400 whitespace-pre-wrap leading-relaxed select-none">
                                {terminalText}
                            </pre>
                            
                            {/* Screen glare reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-t-lg" />
                        </div>
                        
                        {/* Keyboard Base */}
                        <div className="w-68 h-3.5 md:w-84 md:h-4 bg-zinc-600 rounded-b-xl border-t border-zinc-500 shadow-md relative flex justify-center">
                            {/* Indent track for laptop opening */}
                            <div className="w-10 h-1 bg-zinc-700 rounded-b absolute top-0" />
                        </div>
                        
                        {/* Bottom shadow */}
                        <motion.div 
                            className="w-56 h-2 bg-black/10 rounded-full blur-sm mt-3"
                            initial={{ scaleX: 0.2, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.45 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
