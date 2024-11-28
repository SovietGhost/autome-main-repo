import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { User } from "better-auth";
import * as React from "react";

interface EmailVerificationProps {
  user: User;
  url: string;
  token: string;
}

export const EmailVerification = ({
  token,
  url,
  user,
}: EmailVerificationProps) => (
  <Html>
    <Head />
    <Preview>Verify your email for AUTOME.AZ</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://telegram-jira.vercel.app/Logo.png"
          width="150"
          height="50"
          alt="AUTOME.AZ"
          style={logo}
        />
        <Section style={headerSection}>
          <Heading style={h1}>Email Verification</Heading>
        </Section>
        <Hr style={hr} />
        <Section>
          <Text style={text}>Hello {user.name},</Text>
          <Text style={text}>
            Thank you for registering on AUTOME.AZ! To complete your sign-up,
            please verify your email address by clicking the button below:
          </Text>
          <Link href={url} style={button}>
            Verify Email Address
          </Link>
          <Text style={text}>
            If you did not sign up for AUTOME.AZ, you can safely ignore this
            email.
          </Text>
        </Section>
        <Hr style={hr} />
        <Section>
          <Text style={footer}>
            © {new Date().getFullYear()} AUTOME.AZ. All rights reserved.
            <br />
            Baku, Azerbaijan
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailVerification;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const logo = {
  margin: "0 auto",
  marginBottom: "32px",
};

const headerSection = {
  padding: "32px",
};

const h1 = {
  color: "#333",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const button = {
  backgroundColor: "#e53e3e",
  borderRadius: "5px",
  color: "#fff",
  display: "block",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: "50px",
  textAlign: "center" as const,
  textDecoration: "none",
  width: "100%",
  marginTop: "20px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};
