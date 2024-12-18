import Image from "next/image";
import { sourceCodePro, orbitron } from "../fonts";
import { CenterLayout, DistopiaLayout } from "../components/Layouts";
import goldenGateBridge from "./golden-gate-bridge.jpg";
import qRCode from "./contact-qr-code.png";

const DataDescription = ({ children }: { children: any }) => (
  <dd className={sourceCodePro.className}>{children}</dd>
);

const Page = () => (
  <DistopiaLayout>
    <CenterLayout>
      <article>
        <h1 data-content="Contact" className={orbitron.className}>
          Contact
        </h1>
        <Image
          src={goldenGateBridge}
          alt="Golden Gate Bridge"
          style={{
            maxWidth: "100%",
            marginBottom: "3rem",
            borderRadius: "1rem",
            boxShadow: "0 0 3rem 3rem rgba(0,0,0,0.3)",
            mixBlendMode: "lighten",
          }}
          width="672"
          height="672"
        />
        <p>
          Connecting with other professionals in my industry and people who are
          interested in my work is one of my top priorities. I welcome any
          questions, comments, or ideas that you may have, and I will make every
          effort to respond promptly and engage with you in a professional and
          respectful manner. Building strong relationships with colleagues and
          the wider community is a core value of mine, and I believe that open
          and honest communication is key to achieving this. So if you would
          like to get in touch, please don&rsquo;t hesitate to do so. I&rsquo;m
          eager to hear from you and explore the potential of working together.
        </p>

        <dl>
          <dt>Email</dt>
          <DataDescription>
            <a href="mailto:deanwagman@gmail.com">deanwagman@gmail.com</a>
          </DataDescription>

          <dt>Phone</dt>
          <DataDescription>
            <a href="tel:+140732597710">(407)325-9770</a>
          </DataDescription>

          <dt>LinkedIn</dt>
          {/* todo: fix open in new tab or whatever */}
          <DataDescription>
            <a href="https://linkedin.com/in/deanwagman">
              linkedin.com/in/deanwagman
            </a>
          </DataDescription>

          <dt>Location</dt>
          <DataDescription>
            San Francisco, California
            <br />
          </DataDescription>

          <dt>GitHub</dt>
          <DataDescription>
            <a href="https://github.com/deanwagman">github.com/deanwagman</a>
          </DataDescription>

          <dt>Availability</dt>
          <DataDescription>
            Currently seeking new opportunities in software engineering. Please
            feel free to contact me regarding potential projects or
            collaborations.
          </DataDescription>
        </dl>

        <h2>QR Code for dean.engineer</h2>
        <Image
          src={qRCode}
          style={{ maxWidth: "100%", mixBlendMode: "color-dodge" }}
          alt="Website QR code"
          width="672"
          height="672"
        />
      </article>
    </CenterLayout>
  </DistopiaLayout>
);

export default Page;
