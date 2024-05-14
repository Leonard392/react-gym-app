import React from "react";
import imagePng from "../images/a.avif";

export default function Features() {
  return (
    <div className="features">
      <div className="left">
        <img src={imagePng} className="left-img" alt="img" />
      </div>
      <div className="right">
        <h2>Features</h2>
        <ul>
          <li>
            <h4>Feature Title</h4>
            <p>
              asldasl daslmd asm dlasmkd maskd asdklmasld askdm asdklmaslda
              mkdas a kldaskld las ndklnas lkdnaskldn as dkasndkl an dnas a
              skldas masmkd as
            </p>
          </li>
          <li>
            <h4>Feature Title</h4>
            <p>
              asldasl daslmd asm dlasmkd maskd asdklmasld askdm asdklmaslda
              mkdas a kldaskld las ndklnas lkdnaskldn as dkasndkl an dnas a
              skldas masmkd as
            </p>
          </li>
          <li>
            <h4>Feature Title</h4>
            <p>
              asldasl daslmd asm dlasmkd maskd asdklmasld askdm asdklmaslda
              mkdas a kldaskld las ndklnas lkdnaskldn as dkasndkl an dnas a
              skldas masmkd as
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
