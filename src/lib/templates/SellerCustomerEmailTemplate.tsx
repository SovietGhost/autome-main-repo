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
import * as React from "react";

interface WelcomeEmailProps {
  fullName: string;
  email: string;
  message: string;
}

export const WelcomeEmail = ({
  fullName,
  email,
  message,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to AUTOME.AZ - Your Ultimate Car Marketplace</Preview>
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
          <Heading style={h1}>Welcome to AUTOME.AZ</Heading>
          <Text style={text}>Your Ultimate Car Marketplace</Text>
        </Section>
        <Hr style={hr} />
        <Section>
          <Text style={text}>Hello {fullName},</Text>
          <Text style={text}>Email {email},</Text>
          <Text style={text}>Message:</Text>
          <Text style={text}>{message}</Text>
          <Text style={text}>
            We're thrilled to welcome you to AUTOME.AZ, the premier destination
            for buying and selling cars in Azerbaijan. Whether you're looking
            for your dream car or wanting to sell your current vehicle, we've
            got you covered.
          </Text>
          <Text style={text}>Here's what you can do on AUTOME.AZ:</Text>
          <ul>
            <li style={listItem}>Browse thousands of car listings</li>
            <li style={listItem}>Post your own car for sale</li>
            <li style={listItem}>Compare prices and features</li>
            <li style={listItem}>Connect with buyers and sellers</li>
          </ul>
          <Text style={text}>
            Ready to get started? Click the button below to explore our latest
            listings:
          </Text>
          <Link href="https://autome.az/" style={button}>
            View Latest Listings
          </Link>
        </Section>
        <Hr style={hr} />
        <Section>
          <Text style={footer}>
            © 2023 AUTOME.AZ. All rights reserved.
            <br />
            Baku, Azerbaijan
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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

const listItem = {
  ...text,
  marginBottom: "10px",
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
