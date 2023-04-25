import '../../styles/globals.css';

export default function Layout({ children }: any): JSX.Element {
  return (
    <div
      className={`bg-[#050816] lg:h-screen sm:h-full lg:overflow-auto border sm:overflow-visible shadow-inner shadow-[#915EFF]`}
    >
      {children}
    </div>
  );
}
