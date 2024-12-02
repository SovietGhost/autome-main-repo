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

interface PasswordResetProps {
  token: string;
  url: string;
  user: User;
}

export const PasswordResetEmail = ({
  user,
  
  url,
}: PasswordResetProps) => (
  <Html>
    <Head />
    <Preview>Reset your password for AUTOME.AZ</Preview>
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
          <Heading style={h1}>Password Reset</Heading>
        </Section>
        <Hr style={hr} />
        <Section>
          <Text style={text}>Hello {user.name ?? user.email},</Text>
          <Text style={text}>
            We received a request to reset your password for your AUTOME.AZ
            account. If you didn't make this request, you can safely ignore this
            email.
          </Text>
          <Text style={text}>
            To reset your password, click the button below:
          </Text>
          <Link href={url} style={button}>
            Reset Password
          </Link>
          <Text style={text}>
            This password reset link will expire in 1 hour for security reasons.
          </Text>
          <Text style={text}>
            If you're having trouble clicking the button, copy and paste the URL
            below into your web browser:
          </Text>
          <Text style={link}>{url}</Text>
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

export default PasswordResetEmail;

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
  backgroundColor: "#007bff",
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

const link = {
  color: "#007bff",
  textDecoration: "underline",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "14px",
  lineHeight: "24px",
  textAlign: "left" as const,
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
