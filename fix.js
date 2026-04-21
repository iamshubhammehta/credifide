const fs = require("fs");

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Fix whileHover={{ y: -10 }} in Services
  content = content.replace(/whileHover=\{\{ y: -10 \}\}\s*className="([^"]+)"/g, (match, classNames) => {
    let newClass = classNames.replace("hover:border-brand-deep/20", "md:hover:border-brand-deep/20")
                             .replace("hover:shadow-[0_40px_70px_-15px_rgba(11,107,87,0.12)]", "md:hover:shadow-[0_40px_70px_-15px_rgba(11,107,87,0.12)] md:hover:-translate-y-2");
    return `className="${newClass}"`;
  });

  // Fix Services group-hover
  content = content.replace(/group-hover:(scale-110|text-brand-deep|w-12|bg-brand-accent|bg-brand-deep\/5)/g, "md:group-hover:$1");

  // Fix whileHover={{ y: -12, scale: 1.02 }} in Why Choose Us
  content = content.replace(/whileHover=\{\{ y: -12, scale: 1\.02 \}\}\s*className="([^"]+)"/g, (match, classNames) => {
    let newClass = classNames.replace("hover:border-brand-deep/30", "md:hover:border-brand-deep/30")
                             .replace("hover:shadow-[0_40px_80px_-20px_rgba(11,107,87,0.1)]", "md:hover:shadow-[0_40px_80px_-20px_rgba(11,107,87,0.1)] md:hover:-translate-y-3 md:hover:scale-[1.02]");
    return `className="${newClass}"`;
  });

  // Fix Why Choose Us group-hover
  content = content.replace(/group-hover:(bg-brand-light\/10|text-brand-accent|text-white|bg-brand-deep|text-slate-600|opacity-100)/g, "md:group-hover:$1");

  // Fix Process section
  content = content.replace(/whileHover=\{\{ backgroundColor: 'rgba\(255,255,255,0\.05\)' \}\}/g, "");
  content = content.replace(/className="bg-white\/5 p-8 sm:p-12 transition-all duration-500 group/g, "className=\"bg-white/5 md:hover:bg-white/10 p-8 sm:p-12 transition-all duration-500 group");
  content = content.replace(/group-hover:(translate-x-1|w-full|text-white\/80)/g, "md:group-hover:$1");

  // Fix Metrics viewport and scale
  content = content.replace(/whileInView=\{\{ opacity: 1, y: 0 \}\}\s*transition/g, "whileInView={{ opacity: 1, y: 0 }}\n                        viewport={{ once: true }}\n                        transition");
  
  fs.writeFileSync(filePath, content, "utf-8");
}

fixFile("src/pages/ProviderCredentialingLP.tsx");
fixFile("src/pages/ProviderEnrollmentLP.tsx");

console.log("Done");
