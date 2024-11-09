import { useContext } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { MainContainer, HeaderContainer, PostsContainer, Post } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IssuesContext } from "../../contexts/IssuesContext";

export function Home() {
  const { issues } = useContext(IssuesContext);

  return (
    <MainContainer>
      <Profile />
      <HeaderContainer>
        <div>
          <h2>Publicações</h2>
          <span>{issues.total_count} publicações</span>
        </div>
        <SearchForm />
      </HeaderContainer>
      <PostsContainer>
        {issues.items.map((issue) => {
          const formattedDate = formatDistanceToNow(issue.created_at, {
            addSuffix: true,
            locale: ptBR,
          });
          return (
            <Post key={issue.id} to={`/issue/${issue.id}`}>
              <header>
                <h3>{issue.title}</h3>
                <span>{formattedDate}</span>
              </header>
              <p>{issue.body}</p>
            </Post>
          );
        })}
      </PostsContainer>
    </MainContainer>
  );
}
