import * as React from 'react';

interface Context {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchTermContext = React.createContext<Context>({
  searchTerm: '',
  setSearchTerm: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app',
    );
  },
});

interface Props {
  children: any;
}

export const SearchTermSessionProvider: React.FC<Props> = (props: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  return (
    <SearchTermContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </SearchTermContext.Provider>
  );
};
