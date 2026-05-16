const Footer = () => {
  return (
    <footer className="bg-[#020b18] border-t border-cyan-400/10 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top accent line */}
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mb-8" />

        <div className="text-center">
          <p className="text-lg font-semibold text-white heading-font mb-1">
            Partha Rakshit
          </p>
          <p className="text-slate-400 body-font mb-4">Quality Analyst · Software Tester · Problem Solver</p>
          <p className="text-slate-500 text-sm body-font">
            © {new Date().getFullYear()} Partha Rakshit. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2 body-font">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
