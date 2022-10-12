import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/team">Team</Link>
        <Link href="/account">Account</Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
