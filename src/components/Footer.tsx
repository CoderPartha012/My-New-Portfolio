const Footer = () => (
  <footer className="bg-black border-t border-white/[0.06] py-10">
    <div className="container px-8 mx-auto md:px-16">
      <div className="flex flex-col items-center gap-3 text-center">
        {/* Monogram */}
        <span className="font-heading italic text-white text-3xl tracking-[-1px] leading-none">
          Partha Rakshit
        </span>
        <p className="text-sm font-body text-white/50">
          Quality Analyst · Software Tester · Problem Solver
        </p>
        <p className="mt-1 text-xs font-body text-white/25">
          © {new Date().getFullYear()} Partha Rakshit. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
