import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <Anchor active={pathname === "/"}>Home</Anchor>
        </Link>
        <Link href="/product">
          <Anchor active={pathname === "/product"}>Produkt</Anchor>
        </Link>
        <Link href="/team">
          <Anchor active={pathname === "/team"}>Team</Anchor>
        </Link>
        <Link href="/account">
          <Anchor active={pathname === "/account"}>Account</Anchor>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 0;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;

const Anchor = styled.a`
  background-color: ${(props) => (props.active ? "green" : "none")};
  width: 100%;
  text-align: center;
  padding: 20px;
`;
