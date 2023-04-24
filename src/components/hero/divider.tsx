interface DividerProps {
  username: string;
}

export const Divider = ({ username }: DividerProps) => {
  return (
    <div className="divider static top-1/2 h-16 w-full bg-[#232631]">
      <span className="text-white h-full text-3xl flex items-center justify-center">
      <span className="text-white/80">{username}</span>{' '}
      </span>
    </div>
  );
};

export const Navbar = ({ username }: DividerProps) => {
  return (
    <div className="navbar static top-0 h-16 w-full bg-[#232631]">
      <span className="text-white h-full text-3xl flex items-center justify-center">
        <span className="text-white/80">{username}</span>{' '}
      </span>
    </div>
  );
};