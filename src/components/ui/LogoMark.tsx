
export const LogoMark = () => {
  return (
    <div className="relative h-10 w-10 flex items-center justify-center">
      <div className="absolute h-10 w-10 rounded-full border-2 border-black" />
      
      {/* The 'o' in Hello with a tech circuit touch */}
      <div className="absolute h-6 w-6 rounded-full border-2 border-brand-blue flex items-center justify-center">
        <div className="h-2 w-2 bg-brand-blue rounded-full" />
        {/* Circuit line */}
        <div className="absolute h-1 w-3 bg-brand-blue top-3 right-0 transform translate-x-1/2" />
      </div>
    </div>
  );
};
