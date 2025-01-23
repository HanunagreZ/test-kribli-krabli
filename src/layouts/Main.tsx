export const Main = ({
  children,
}: Readonly<{ children?: React.ReactNode }>) => {
  return (
    <main className="pt-15 pb-[68px] c-480:pb-[116px] c-960:pb-[80px] overflow-hidden">
      {children}
    </main>
  );
};
