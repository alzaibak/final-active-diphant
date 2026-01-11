import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  captions: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  images,
  captions,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 end-6 z-50 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute start-4 md:start-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute end-4 md:end-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            </>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images[currentIndex]}
                alt={captions[currentIndex]}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center"
            >
              <p className="text-lg font-medium text-foreground">
                {captions[currentIndex]}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {currentIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}