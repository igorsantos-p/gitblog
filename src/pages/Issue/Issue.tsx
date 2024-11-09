import {
  faAngleLeft,
  faCalendarDay,
  faComment,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IssueContainer,
  IssueHeaderContainer,
  LinksContainer,
  FooterContainer,
  IssueContent,
} from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";
import { Link, useParams } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function Issue() {
  const { issues } = useContext(IssuesContext);
  const { id } = useParams();

  const issue = issues.items.find((issue) => {
    return issue.id === Number(id);
  });

  const formattedDate = issue
    ? formatDistanceToNow(issue.created_at, {
        addSuffix: true,
        locale: ptBR,
      })
    : "";

  console.log(issue);

  return (
    <IssueContainer>
      <IssueHeaderContainer>
        <LinksContainer>
          <Link to="/">
            <FontAwesomeIcon icon={faAngleLeft} /> Voltar
          </Link>
          <Link to={issue?.html_url || ""} target="_blank">
            Ver no github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </Link>
        </LinksContainer>
        <h2>{issue?.title}</h2>
        <FooterContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {issue?.user.login}
          </span>

          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formattedDate}
          </span>

          <span>
            <FontAwesomeIcon icon={faComment} />
            {issue?.comments} comentários
          </span>
        </FooterContainer>
      </IssueHeaderContainer>

      <IssueContent>
        <Markdown rehypePlugins={[rehypeRaw]}>{issue?.body}</Markdown>
      </IssueContent>
    </IssueContainer>
  );
}
