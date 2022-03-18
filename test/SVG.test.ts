import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { $SVG } from "../typechain-types/$SVG";

describe("SVG", function () {
  let signers: SignerWithAddress[];
  let library: $SVG;

  this.beforeAll(async () => {
    const Library = await ethers.getContractFactory("$SVG");
    library = (await Library.deploy()) as $SVG;
    await library.deployed();
    signers = await ethers.getSigners();
  });

  it("char", async () => {
    expect(ethers.utils.toUtf8String(await library.$char(0xfff0, 0, 0))).to.eq(
      "<rect x='0' y='0' width='8' height='8' fill='rgb(0,0,0)' /><rect x='0' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='0' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='1' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='1' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='2' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='2' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='3' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='3' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='4' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='4' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='5' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='5' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='0' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='1' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='2' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='3' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='4' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='5' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='6' y='7' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='0' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='1' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='2' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='3' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='4' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='5' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='6' width='1' height='1' fill='rgb(255,204,170)' /><rect x='7' y='7' width='1' height='1' fill='rgb(255,204,170)' />"
    );
  });

  it("svg", async () => {
    expect(
      ethers.utils.toUtf8String(
        await library.$svg(
          ethers.BigNumber.from(
            "0x3D7C291558C0D862490EA5D535DECDCEB94FD5BB646C18BBF8EFD112458145A7"
          )
        )
      )
    ).to.eq(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='512' height='512' shape-rendering='crispEdges'><rect x='24' y='24' width='8' height='8' fill='rgb(255,241,232)' /><rect x='25' y='24' width='1' height='1' fill='rgb(255,236,39)' /><rect x='25' y='25' width='1' height='1' fill='rgb(255,236,39)' /><rect x='25' y='26' width='1' height='1' fill='rgb(255,236,39)' /><rect x='25' y='27' width='1' height='1' fill='rgb(255,236,39)' /><rect x='25' y='28' width='1' height='1' fill='rgb(255,236,39)' /><rect x='25' y='29' width='1' height='1' fill='rgb(255,236,39)' /><rect x='25' y='30' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='24' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='25' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='26' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='27' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='28' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='29' width='1' height='1' fill='rgb(255,236,39)' /><rect x='26' y='30' width='1' height='1' fill='rgb(255,236,39)' /><rect x='27' y='24' width='1' height='1' fill='rgb(255,236,39)' /><rect x='27' y='27' width='1' height='1' fill='rgb(255,236,39)' /><rect x='27' y='30' width='1' height='1' fill='rgb(255,236,39)' /><rect x='28' y='24' width='1' height='1' fill='rgb(255,236,39)' /><rect x='28' y='27' width='1' height='1' fill='rgb(255,236,39)' /><rect x='28' y='30' width='1' height='1' fill='rgb(255,236,39)' /><rect x='29' y='24' width='1' height='1' fill='rgb(255,236,39)' /><rect x='29' y='30' width='1' height='1' fill='rgb(255,236,39)' /><rect x='30' y='24' width='1' height='1' fill='rgb(255,236,39)' /><rect x='30' y='30' width='1' height='1' fill='rgb(255,236,39)' /><rect x='24' y='16' width='8' height='8' fill='rgb(0,228,54)' /><rect x='24' y='19' width='1' height='1' fill='rgb(0,228,54)' /><rect x='25' y='18' width='1' height='1' fill='rgb(0,228,54)' /><rect x='26' y='17' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='16' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='17' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='18' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='19' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='20' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='21' width='1' height='1' fill='rgb(0,228,54)' /><rect x='27' y='22' width='1' height='1' fill='rgb(0,228,54)' /><rect x='28' y='17' width='1' height='1' fill='rgb(0,228,54)' /><rect x='29' y='18' width='1' height='1' fill='rgb(0,228,54)' /><rect x='30' y='19' width='1' height='1' fill='rgb(0,228,54)' /><rect x='24' y='8' width='8' height='8' fill='rgb(255,119,168)' /><rect x='24' y='13' width='1' height='1' fill='rgb(41,173,255)' /><rect x='25' y='9' width='1' height='1' fill='rgb(41,173,255)' /><rect x='25' y='10' width='1' height='1' fill='rgb(41,173,255)' /><rect x='25' y='14' width='1' height='1' fill='rgb(41,173,255)' /><rect x='26' y='8' width='1' height='1' fill='rgb(41,173,255)' /><rect x='26' y='11' width='1' height='1' fill='rgb(41,173,255)' /><rect x='26' y='15' width='1' height='1' fill='rgb(41,173,255)' /><rect x='27' y='14' width='1' height='1' fill='rgb(41,173,255)' /><rect x='28' y='10' width='1' height='1' fill='rgb(41,173,255)' /><rect x='29' y='9' width='1' height='1' fill='rgb(41,173,255)' /><rect x='29' y='12' width='1' height='1' fill='rgb(41,173,255)' /><rect x='29' y='15' width='1' height='1' fill='rgb(41,173,255)' /><rect x='30' y='10' width='1' height='1' fill='rgb(41,173,255)' /><rect x='30' y='13' width='1' height='1' fill='rgb(41,173,255)' /><rect x='30' y='14' width='1' height='1' fill='rgb(41,173,255)' /><rect x='31' y='11' width='1' height='1' fill='rgb(41,173,255)' /><rect x='24' y='0' width='8' height='8' fill='rgb(126,37,83)' /><rect x='24' y='2' width='1' height='1' fill='rgb(194,195,199)' /><rect x='24' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='24' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='25' y='1' width='1' height='1' fill='rgb(194,195,199)' /><rect x='25' y='2' width='1' height='1' fill='rgb(194,195,199)' /><rect x='25' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='25' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='25' y='5' width='1' height='1' fill='rgb(194,195,199)' /><rect x='26' y='1' width='1' height='1' fill='rgb(194,195,199)' /><rect x='26' y='2' width='1' height='1' fill='rgb(194,195,199)' /><rect x='26' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='26' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='26' y='5' width='1' height='1' fill='rgb(194,195,199)' /><rect x='27' y='2' width='1' height='1' fill='rgb(194,195,199)' /><rect x='27' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='27' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='27' y='5' width='1' height='1' fill='rgb(194,195,199)' /><rect x='28' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='28' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='28' y='5' width='1' height='1' fill='rgb(194,195,199)' /><rect x='29' y='2' width='1' height='1' fill='rgb(194,195,199)' /><rect x='29' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='29' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='29' y='5' width='1' height='1' fill='rgb(194,195,199)' /><rect x='30' y='3' width='1' height='1' fill='rgb(194,195,199)' /><rect x='30' y='4' width='1' height='1' fill='rgb(194,195,199)' /><rect x='16' y='24' width='8' height='8' fill='rgb(29,43,83)' /><rect x='17' y='24' width='1' height='1' fill='rgb(255,0,77)' /><rect x='17' y='25' width='1' height='1' fill='rgb(255,0,77)' /><rect x='17' y='26' width='1' height='1' fill='rgb(255,0,77)' /><rect x='17' y='27' width='1' height='1' fill='rgb(255,0,77)' /><rect x='17' y='28' width='1' height='1' fill='rgb(255,0,77)' /><rect x='17' y='29' width='1' height='1' fill='rgb(255,0,77)' /><rect x='17' y='30' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='24' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='25' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='26' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='27' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='28' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='29' width='1' height='1' fill='rgb(255,0,77)' /><rect x='18' y='30' width='1' height='1' fill='rgb(255,0,77)' /><rect x='19' y='24' width='1' height='1' fill='rgb(255,0,77)' /><rect x='19' y='27' width='1' height='1' fill='rgb(255,0,77)' /><rect x='19' y='30' width='1' height='1' fill='rgb(255,0,77)' /><rect x='20' y='24' width='1' height='1' fill='rgb(255,0,77)' /><rect x='20' y='27' width='1' height='1' fill='rgb(255,0,77)' /><rect x='20' y='30' width='1' height='1' fill='rgb(255,0,77)' /><rect x='21' y='24' width='1' height='1' fill='rgb(255,0,77)' /><rect x='21' y='30' width='1' height='1' fill='rgb(255,0,77)' /><rect x='22' y='24' width='1' height='1' fill='rgb(255,0,77)' /><rect x='22' y='30' width='1' height='1' fill='rgb(255,0,77)' /><rect x='16' y='16' width='8' height='8' fill='rgb(41,173,255)' /><rect x='17' y='19' width='1' height='1' fill='rgb(194,195,199)' /><rect x='17' y='20' width='1' height='1' fill='rgb(194,195,199)' /><rect x='17' y='21' width='1' height='1' fill='rgb(194,195,199)' /><rect x='18' y='18' width='1' height='1' fill='rgb(194,195,199)' /><rect x='18' y='19' width='1' height='1' fill='rgb(194,195,199)' /><rect x='18' y='20' width='1' height='1' fill='rgb(194,195,199)' /><rect x='18' y='21' width='1' height='1' fill='rgb(194,195,199)' /><rect x='18' y='22' width='1' height='1' fill='rgb(194,195,199)' /><rect x='19' y='18' width='1' height='1' fill='rgb(194,195,199)' /><rect x='19' y='22' width='1' height='1' fill='rgb(194,195,199)' /><rect x='20' y='18' width='1' height='1' fill='rgb(194,195,199)' /><rect x='20' y='22' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='16' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='17' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='18' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='19' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='20' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='21' width='1' height='1' fill='rgb(194,195,199)' /><rect x='21' y='22' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='16' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='17' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='18' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='19' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='20' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='21' width='1' height='1' fill='rgb(194,195,199)' /><rect x='22' y='22' width='1' height='1' fill='rgb(194,195,199)' /><rect x='16' y='8' width='8' height='8' fill='rgb(255,119,168)' /><rect x='17' y='8' width='1' height='1' fill='rgb(131,118,156)' /><rect x='17' y='9' width='1' height='1' fill='rgb(131,118,156)' /><rect x='17' y='10' width='1' height='1' fill='rgb(131,118,156)' /><rect x='17' y='11' width='1' height='1' fill='rgb(131,118,156)' /><rect x='17' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='18' y='8' width='1' height='1' fill='rgb(131,118,156)' /><rect x='18' y='9' width='1' height='1' fill='rgb(131,118,156)' /><rect x='18' y='10' width='1' height='1' fill='rgb(131,118,156)' /><rect x='18' y='11' width='1' height='1' fill='rgb(131,118,156)' /><rect x='18' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='18' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='19' y='8' width='1' height='1' fill='rgb(131,118,156)' /><rect x='19' y='11' width='1' height='1' fill='rgb(131,118,156)' /><rect x='19' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='20' y='8' width='1' height='1' fill='rgb(131,118,156)' /><rect x='20' y='11' width='1' height='1' fill='rgb(131,118,156)' /><rect x='20' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='21' y='8' width='1' height='1' fill='rgb(131,118,156)' /><rect x='21' y='9' width='1' height='1' fill='rgb(131,118,156)' /><rect x='21' y='11' width='1' height='1' fill='rgb(131,118,156)' /><rect x='21' y='12' width='1' height='1' fill='rgb(131,118,156)' /><rect x='21' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='21' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='22' y='8' width='1' height='1' fill='rgb(131,118,156)' /><rect x='22' y='9' width='1' height='1' fill='rgb(131,118,156)' /><rect x='22' y='12' width='1' height='1' fill='rgb(131,118,156)' /><rect x='22' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='16' y='0' width='8' height='8' fill='rgb(0,0,0)' /><rect x='17' y='0' width='1' height='1' fill='rgb(41,173,255)' /><rect x='17' y='1' width='1' height='1' fill='rgb(41,173,255)' /><rect x='17' y='5' width='1' height='1' fill='rgb(41,173,255)' /><rect x='17' y='6' width='1' height='1' fill='rgb(41,173,255)' /><rect x='18' y='0' width='1' height='1' fill='rgb(41,173,255)' /><rect x='18' y='1' width='1' height='1' fill='rgb(41,173,255)' /><rect x='18' y='2' width='1' height='1' fill='rgb(41,173,255)' /><rect x='18' y='4' width='1' height='1' fill='rgb(41,173,255)' /><rect x='18' y='5' width='1' height='1' fill='rgb(41,173,255)' /><rect x='18' y='6' width='1' height='1' fill='rgb(41,173,255)' /><rect x='19' y='2' width='1' height='1' fill='rgb(41,173,255)' /><rect x='19' y='3' width='1' height='1' fill='rgb(41,173,255)' /><rect x='19' y='4' width='1' height='1' fill='rgb(41,173,255)' /><rect x='20' y='2' width='1' height='1' fill='rgb(41,173,255)' /><rect x='20' y='3' width='1' height='1' fill='rgb(41,173,255)' /><rect x='20' y='4' width='1' height='1' fill='rgb(41,173,255)' /><rect x='21' y='0' width='1' height='1' fill='rgb(41,173,255)' /><rect x='21' y='1' width='1' height='1' fill='rgb(41,173,255)' /><rect x='21' y='2' width='1' height='1' fill='rgb(41,173,255)' /><rect x='21' y='4' width='1' height='1' fill='rgb(41,173,255)' /><rect x='21' y='5' width='1' height='1' fill='rgb(41,173,255)' /><rect x='21' y='6' width='1' height='1' fill='rgb(41,173,255)' /><rect x='22' y='0' width='1' height='1' fill='rgb(41,173,255)' /><rect x='22' y='1' width='1' height='1' fill='rgb(41,173,255)' /><rect x='22' y='5' width='1' height='1' fill='rgb(41,173,255)' /><rect x='22' y='6' width='1' height='1' fill='rgb(41,173,255)' /><rect x='8' y='24' width='8' height='8' fill='rgb(126,37,83)' /><rect x='10' y='29' width='1' height='1' fill='rgb(29,43,83)' /><rect x='10' y='30' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='27' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='28' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='29' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='30' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='31' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='24' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='26' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='28' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='29' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='30' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='31' width='1' height='1' fill='rgb(29,43,83)' /><rect x='13' y='25' width='1' height='1' fill='rgb(29,43,83)' /><rect x='13' y='29' width='1' height='1' fill='rgb(29,43,83)' /><rect x='13' y='30' width='1' height='1' fill='rgb(29,43,83)' /><rect x='14' y='24' width='1' height='1' fill='rgb(29,43,83)' /><rect x='14' y='26' width='1' height='1' fill='rgb(29,43,83)' /><rect x='8' y='16' width='8' height='8' fill='rgb(0,228,54)' /><rect x='8' y='19' width='1' height='1' fill='rgb(0,228,54)' /><rect x='9' y='16' width='1' height='1' fill='rgb(0,228,54)' /><rect x='9' y='19' width='1' height='1' fill='rgb(0,228,54)' /><rect x='9' y='23' width='1' height='1' fill='rgb(0,228,54)' /><rect x='10' y='18' width='1' height='1' fill='rgb(0,228,54)' /><rect x='10' y='22' width='1' height='1' fill='rgb(0,228,54)' /><rect x='11' y='19' width='1' height='1' fill='rgb(0,228,54)' /><rect x='11' y='23' width='1' height='1' fill='rgb(0,228,54)' /><rect x='12' y='17' width='1' height='1' fill='rgb(0,228,54)' /><rect x='12' y='21' width='1' height='1' fill='rgb(0,228,54)' /><rect x='12' y='23' width='1' height='1' fill='rgb(0,228,54)' /><rect x='13' y='17' width='1' height='1' fill='rgb(0,228,54)' /><rect x='13' y='21' width='1' height='1' fill='rgb(0,228,54)' /><rect x='14' y='16' width='1' height='1' fill='rgb(0,228,54)' /><rect x='14' y='20' width='1' height='1' fill='rgb(0,228,54)' /><rect x='15' y='17' width='1' height='1' fill='rgb(0,228,54)' /><rect x='15' y='21' width='1' height='1' fill='rgb(0,228,54)' /><rect x='8' y='8' width='8' height='8' fill='rgb(95,87,79)' /><rect x='8' y='12' width='1' height='1' fill='rgb(131,118,156)' /><rect x='8' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='8' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='8' y='15' width='1' height='1' fill='rgb(131,118,156)' /><rect x='9' y='12' width='1' height='1' fill='rgb(131,118,156)' /><rect x='9' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='9' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='9' y='15' width='1' height='1' fill='rgb(131,118,156)' /><rect x='10' y='12' width='1' height='1' fill='rgb(131,118,156)' /><rect x='10' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='10' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='10' y='15' width='1' height='1' fill='rgb(131,118,156)' /><rect x='11' y='12' width='1' height='1' fill='rgb(131,118,156)' /><rect x='11' y='13' width='1' height='1' fill='rgb(131,118,156)' /><rect x='11' y='14' width='1' height='1' fill='rgb(131,118,156)' /><rect x='11' y='15' width='1' height='1' fill='rgb(131,118,156)' /><rect x='8' y='0' width='8' height='8' fill='rgb(95,87,79)' /><rect x='10' y='0' width='1' height='1' fill='rgb(29,43,83)' /><rect x='10' y='6' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='0' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='1' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='5' width='1' height='1' fill='rgb(29,43,83)' /><rect x='11' y='6' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='1' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='2' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='3' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='4' width='1' height='1' fill='rgb(29,43,83)' /><rect x='12' y='5' width='1' height='1' fill='rgb(29,43,83)' /><rect x='13' y='2' width='1' height='1' fill='rgb(29,43,83)' /><rect x='13' y='3' width='1' height='1' fill='rgb(29,43,83)' /><rect x='13' y='4' width='1' height='1' fill='rgb(29,43,83)' /><rect x='0' y='24' width='8' height='8' fill='rgb(255,204,170)' /><rect x='1' y='24' width='1' height='1' fill='rgb(255,119,168)' /><rect x='1' y='29' width='1' height='1' fill='rgb(255,119,168)' /><rect x='1' y='30' width='1' height='1' fill='rgb(255,119,168)' /><rect x='2' y='27' width='1' height='1' fill='rgb(255,119,168)' /><rect x='2' y='28' width='1' height='1' fill='rgb(255,119,168)' /><rect x='2' y='31' width='1' height='1' fill='rgb(255,119,168)' /><rect x='3' y='26' width='1' height='1' fill='rgb(255,119,168)' /><rect x='3' y='30' width='1' height='1' fill='rgb(255,119,168)' /><rect x='3' y='31' width='1' height='1' fill='rgb(255,119,168)' /><rect x='4' y='25' width='1' height='1' fill='rgb(255,119,168)' /><rect x='4' y='26' width='1' height='1' fill='rgb(255,119,168)' /><rect x='4' y='29' width='1' height='1' fill='rgb(255,119,168)' /><rect x='4' y='30' width='1' height='1' fill='rgb(255,119,168)' /><rect x='4' y='31' width='1' height='1' fill='rgb(255,119,168)' /><rect x='5' y='25' width='1' height='1' fill='rgb(255,119,168)' /><rect x='5' y='27' width='1' height='1' fill='rgb(255,119,168)' /><rect x='5' y='31' width='1' height='1' fill='rgb(255,119,168)' /><rect x='6' y='28' width='1' height='1' fill='rgb(255,119,168)' /><rect x='6' y='29' width='1' height='1' fill='rgb(255,119,168)' /><rect x='6' y='30' width='1' height='1' fill='rgb(255,119,168)' /><rect x='0' y='16' width='8' height='8' fill='rgb(255,204,170)' /><rect x='0' y='16' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='17' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='18' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='19' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='20' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='21' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='22' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='23' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='16' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='17' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='18' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='19' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='20' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='21' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='22' width='1' height='1' fill='rgb(171,82,54)' /><rect x='1' y='23' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='16' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='17' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='18' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='19' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='20' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='21' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='22' width='1' height='1' fill='rgb(171,82,54)' /><rect x='2' y='23' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='16' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='17' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='18' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='19' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='20' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='21' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='22' width='1' height='1' fill='rgb(171,82,54)' /><rect x='3' y='23' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='16' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='17' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='18' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='19' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='20' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='21' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='22' width='1' height='1' fill='rgb(171,82,54)' /><rect x='4' y='23' width='1' height='1' fill='rgb(171,82,54)' /><rect x='0' y='8' width='8' height='8' fill='rgb(255,119,168)' /><rect x='2' y='8' width='1' height='1' fill='rgb(0,0,0)' /><rect x='2' y='14' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='8' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='9' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='10' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='11' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='12' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='13' width='1' height='1' fill='rgb(0,0,0)' /><rect x='3' y='14' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='8' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='9' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='10' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='11' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='12' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='13' width='1' height='1' fill='rgb(0,0,0)' /><rect x='4' y='14' width='1' height='1' fill='rgb(0,0,0)' /><rect x='5' y='8' width='1' height='1' fill='rgb(0,0,0)' /><rect x='5' y='14' width='1' height='1' fill='rgb(0,0,0)' /><rect x='0' y='0' width='8' height='8' fill='rgb(41,173,255)' /><rect x='1' y='3' width='1' height='1' fill='rgb(255,241,232)' /><rect x='1' y='5' width='1' height='1' fill='rgb(255,241,232)' /><rect x='2' y='3' width='1' height='1' fill='rgb(255,241,232)' /><rect x='2' y='5' width='1' height='1' fill='rgb(255,241,232)' /><rect x='3' y='3' width='1' height='1' fill='rgb(255,241,232)' /><rect x='3' y='5' width='1' height='1' fill='rgb(255,241,232)' /><rect x='4' y='3' width='1' height='1' fill='rgb(255,241,232)' /><rect x='4' y='5' width='1' height='1' fill='rgb(255,241,232)' /><rect x='5' y='3' width='1' height='1' fill='rgb(255,241,232)' /><rect x='5' y='5' width='1' height='1' fill='rgb(255,241,232)' /></svg>"
    );
  });
});
