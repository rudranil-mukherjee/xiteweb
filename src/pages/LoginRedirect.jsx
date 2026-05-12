import { useEffect } from "react";
import { motion } from "framer-motion";

const REDIRECT_URL = "https://billing.xitenodes.com/login";

const progressVariants = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: { duration: 2, ease: "circInOut" }
  }
};

const LoginRedirect = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(REDIRECT_URL);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center">
      <div className="relative w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto bg-white/15 glass-effect-light rounded-3xl shadow-2xl border border-pink-200/30 backdrop-blur-lg p-8 px-6 md:px-12"
          style={{
            background: "linear-gradient(135deg, rgba(243, 182, 255, 0.22) 0%, rgba(152, 102, 255, 0.18) 100%)",
            boxShadow:
              "0 8px 48px 0 rgba(255, 130, 197, 0.11), 0 1.5px 10px 0 rgba(224, 94, 217, 0.12)"
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="fancy-xitenodes-text text-3xl mb-1 gradient-text-purple tracking-wide">
              Redirecting…
            </span>
            <p className="text-center font-medium text-pink-200/90 mb-3">
              You’re being sent to the <span className="gradient-text-purple font-bold">XiteNodes Billing & Client Portal</span>
            </p>
            <div className="w-full mt-4">
              <div className="h-3 w-full bg-pink-50/30 rounded-full border border-pink-200/30 overflow-hidden shadow">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-200 via-pink-300 to-purple-200 rounded-full"
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </div>
            <div className="text-xs text-pink-100 mt-4">
              Not redirected?{" "}
              <a
                href={REDIRECT_URL}
                className="underline font-bold text-[hsl(var(--bubblegum-accent))] hover:text-pink-400 hover:opacity-85 transition"
              >
                Click here
              </a>
              .
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginRedirect;