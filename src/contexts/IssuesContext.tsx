import { createContext, useEffect, useState } from "react";
import axios from "axios";

interface Item {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

interface IssueData {
  total_count: number;
  items: Array<Item>;
}

interface IssuesContextType {
  issues: IssueData;
  getIssues: (query?: string) => Promise<void>;
}

interface IssuesProviderProps {
  children: React.ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueData>({
    total_count: 0,
    items: [],
  } as IssueData);

  async function getIssues(query?: string) {
    const response = await axios.get("https://api.github.com/search/issues", {
      params: {
        q: `repo:diego3g/faladev ${query || ""}`,
      },
    });

    console.log(response.data);
    setIssues(response.data);
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <IssuesContext.Provider value={{ issues, getIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}
