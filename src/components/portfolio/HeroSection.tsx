import { ContactButton } from "./ContactButton";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#E6F7FF] flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1E53] leading-tight mb-4">
              Hello, I'm <span className="text-[#2B187A]">Bryan Garay</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1C1E53] mb-8">
              Software Engineer
            </h2>
            <ContactButton />
          </div>

          {/* Right side - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm">
                <img
                  src="/your-photo.jpg"
                  alt="Bryan Garay"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE3Mi4zODYgMTAwIDE1MCAxMjIuMzg2IDE1MCAxNTBDMTUwIDE3Ny42MTQgMTcyLjM4NiAyMDAgMjAwIDIwMEMyMjcuNjE0IDIwMCAyNTAgMTc3LjYxNCAyNTAgMTUwQzI1MCAxMjIuMzg2IDIyNy42MTQgMTAwIDIwMCAxMDBaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik0yMDAgMjIwQzE1NS44MTcgMjIwIDEyMCAyNTUuODE3IDEyMCAzMDBIMjgwQzI4MCAyNTUuODE3IDI0NC4xODMgMjIwIDIwMCAyMjBaIiBmaWxsPSIjRDFENURCIi8+Cjwvc3ZnPg==";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
