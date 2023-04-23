interface DividerProps {
  username: string;
}

export const Divider = ({ username }: DividerProps) => {
  return (
    <div className="static top-1/2 h-20 w-full bg-[#232631]">
      <span className="text-white h-full text-3xl flex items-center justify-center">
        IDE ______________ || <span className="text-white/80">{username}</span>{' '}
        || _______________________________
      </span>
    </div>
  );
};
