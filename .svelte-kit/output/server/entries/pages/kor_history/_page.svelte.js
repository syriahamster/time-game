import { d as assign, f as now, l as loop, i as identity, c as create_ssr_component, e as escape, h as add_attribute, b as subscribe, v as validate_component } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
/* empty css                   */const title = "\uB2F9\uC2E0\uC758 \uADFC\uD604\uB300 \uD55C\uAD6D\uC5ED\uC0AC \uC218\uC900\uC740?";
const quiz_mode = "guess_year";
const year_range = {
  start: 1900,
  end: 2022
};
const default_life = 100;
const quiz_max = 30;
const score_level = {
  "0": "\uCE21\uC815\uBD88\uAC00..",
  "1": "\uC678\uAD6D\uC778",
  "2": "\uD55C\uAD6D\uC5D0 \uAD00\uC2EC\uC788\uB294 \uC678\uAD6D\uC778",
  "3": "\uD55C\uAD6D\uC744 \uC0AC\uB791\uD558\uB294 \uC678\uAD6D\uC778",
  "4": "\uC5B4\uB9B0\uC774 \uD55C\uAD6D\uC778",
  "6": "\uCCAD\uC18C\uB144 \uD55C\uAD6D\uC778",
  "8": "\uD55C\uAD6D\uC778 \uD3C9\uADE0",
  "10": "\uAD50\uC591\uC788\uB294 \uD55C\uAD6D\uC778 (\uC0C1\uC704 25%)",
  "12": "\uC0C1\uC2DD\uC788\uB294 \uD55C\uAD6D\uC778 (\uC0C1\uC704 15%)",
  "16": "\uC560\uAD6D\uC801\uC778 \uD55C\uAD6D\uC778 (\uC0C1\uC704 5%)",
  "20": "\uC5D8\uB9AC\uD2B8 \uD55C\uAD6D\uC778 (\uC0C1\uC704 1%)",
  "25": "\uD55C\uAD6D \uC804\uBB38\uAC00 (\uC0C1\uC704 0.1%)"
};
const question_list = [
  {
    year: 1900,
    question: "\uC885\uB85C\uC5D0 \uAC00\uB85C\uB4F1\uC774 \uCC98\uC74C \uC124\uCE58\uB41C \uB144\uB3C4\uB294?",
    description: "1900\uB144 4\uC6D4 10\uC77C \uC885\uB85C\uC5D0 \uAC00\uB85C\uB4F1\uC774 \uCC98\uC74C \uC124\uCE58\uB418\uC5C8\uB2E4."
  },
  {
    year: 1903,
    question: "\uB300\uD55C\uC81C\uAD6D \uCD5C\uCD08\uC758 \uC790\uB3D9\uCC28 \uB3C4\uC785",
    description: "1903\uB144 \uB300\uD55C\uC81C\uAD6D \uCD5C\uCD08\uC758 \uC790\uB3D9\uCC28\uAC00 \uACE0\uC885\uD669\uC81C\uC758 \uC5B4\uCC28(\uD3EC\uB4DC A\uD615 \uB9AC\uBB34\uC9C4)\uB85C \uB3C4\uC785\uB418\uC5C8\uB2E4."
  },
  {
    year: 1905,
    question: "\uC77C\uC81C\uAC00 \uD654\uD3D0\uC815\uB9AC\uC0AC\uC5C5 \uAC15\uD589",
    description: "1905\uB144\uBD80\uD130 4\uB144\uAC04 \uB300\uD55C\uC81C\uAD6D \uB0B4\uC758 \uBC31\uB3D9\uD654\uC640 \uC5FD\uC804\uC744 \uC815\uB9AC\uD558\uACE0 \uC0C1\uC5C5\uC740\uD589\uC778 \uC77C\uBCF8 \uC81C\uC77C\uC740\uD589(\uC77C\uBCF8\uC5B4: \u7B2C\u4E00\u9280\u884C \uB2E4\uC774\uC774\uCE58\uAE34\uCF54[*])\uC774 \uBC1C\uD589\uD55C \uD654\uD3D0\uB85C \uB300\uCCB4\uD55C \uAC83\uC744 \uB9D0\uD55C\uB2E4. \uD654\uD3D0\uC815\uB9AC\uC0AC\uC5C5\uC758 \uACB0\uACFC\uB85C \uB300\uD55C\uC81C\uAD6D\uC758 \uD654\uD3D0\uC5D0 \uB300\uD55C \uC77C\uCCB4\uC758 \uC9C0\uBC30\uAD8C\uC740 \uC77C\uBCF8 \uC81C\uAD6D\uC5D0 \uC758\uD574 \uAE08\uC735 \uC9C0\uBC30\uB97C \uBC1B\uAC8C \uB41C\uB2E4. <br>(\uCD9C\uCC98 : \uC704\uD0A4\uBC31\uACFC)"
  },
  {
    year: 1909,
    question: "\uC548\uC911\uADFC\uC774 \uC774\uD1A0\uD788\uB85C\uBD80\uBBF8\uB97C \uC800\uACA9",
    description: "1909\uB144 10\uC6D4 26\uC77C. \uD558\uC5BC\uBE48\uC5D0\uC11C \uC774\uD1A0 \uD788\uB85C\uBD80\uBBF8\uAC00 \uC548\uC911\uADFC\uC5D0\uAC8C \uC800\uACA9\uB418\uC5B4 \uD53C\uC0B4\uB428."
  },
  {
    year: 1910,
    question: "<b>\uC77C\uC81C\uAC15\uC810\uAE30</b>\uAC00 \uC2DC\uC791\uB41C \uB144\uB3C4\uB294?",
    description: "1910\uB144 8\uC6D4 29\uC77C \uD55C\uC77C \uBCD1\uD569 \uC870\uC57D\uC5D0 \uC758\uAC70 \uD55C\uAD6D\uC774 \uC77C\uBCF8\uC5D0 \uAC15\uC81C \uBCD1\uD569\uB418\uC5C8\uB2E4"
  },
  {
    year: 1919,
    question: "3.1 \uC6B4\uB3D9\uC774 \uC77C\uC5B4\uB09C \uB144\uB3C4\uB294?",
    description: "1919\uB144 3\uC6D4 1\uC77C \uB3C5\uB9BD\uB9CC\uC138\uC6B4\uB3D9\uC774 \uC77C\uC5B4\uB0AC\uB2E4."
  },
  {
    year: 1919,
    question: "\uC0C1\uD574\uC784\uC2DC\uC815\uBD80 \uC218\uB9BD.\n",
    description: "3.1 \uC6B4\uB3D9\uC758 \uACB0\uACFC \uC0C1\uD558\uC774\uC5D0\uC11C \uD56D\uC77C \uB3C5\uB9BD\uC6B4\uB3D9\uAC00\uB4E4\uC774 \uBAA8\uC5EC 1919\uB144 4\uC6D4 10\uC77C \uC784\uC2DC\uC758\uC815\uC6D0(\u81E8\u6642\u8B70\u653F\u9662)\uC744 \uCC3D\uC124\uD558\uC600\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uAD6D\uD638\uC640 \uC815\uBD80 \uD615\uD0DC, \uC784\uC2DC\uD5CC\uBC95 \uB4F1\uC744 \uB17C\uC758\uD558\uAC8C \uB418\uC5C8\uB294\uB370, \uC2E0\uC11D\uC6B0\uAC00 '\uB300\uD55C\uC73C\uB85C \uB9DD\uD588\uC73C\uB2C8 \uB300\uD55C\uC73C\uB85C \uD765\uD558\uC790'\uB77C\uACE0 \uC81C\uC548\uD558\uC5EC \uAD6D\uD638\uB97C \uB300\uD55C\uBBFC\uAD6D\uC73C\uB85C \uC815\uD558\uACE0 \uC774\uC640 \uD568\uAED8 \uB300\uD55C\uBBFC\uAD6D \uC784\uC2DC\uD5CC\uC7A5\uC744 \uC81C\uC815\uD558\uC600\uB2E4. <br>(\uCD9C\uCC98: \uB098\uBB34\uC704\uD0A4)"
  },
  {
    year: 1920,
    question: "\uB3C5\uB9BD\uAD70\uC774 \uC77C\uBCF8\uAD70\uACFC\uC758 \uCCAD\uC0B0\uB9AC \uC804\uD22C\uC5D0\uC11C \uC2B9\uB9AC",
    description: "1920\uB144 10\uC6D4 \uAE40\uC88C\uC9C4, \uD64D\uBC94\uB3C4 \uB4F1\uC774 \uC9C0\uD718\uD558\uB294 \uB3C5\uB9BD\uAD70\uC774 \uCCAD\uC0B0\uB9AC \uC77C\uB300\uC5D0\uC11C \uC77C\uBCF8\uAD70\uC744 \uBB3C\uB9AC\uCCE4\uB2E4"
  },
  {
    year: 1929,
    question: "\uD55C\uBC18\uB3C4 \uCD5C\uCD08\uC758 \uB300\uADDC\uBAA8 \uC218\uB825\uBC1C\uC804\uC18C \uC138\uC6CC\uC9D0.\n",
    description: "1929\uB144 \uBD80\uC804\uAC15\uC218\uB825\uC774 \uD604\uC7AC\uC758 \uBD81\uD55C\uC601\uD1A0\uC5D0 \uC138\uC6CC\uC84C\uC73C\uBA70 \uADDC\uBAA8\uB294 200MW\uAE09\uC774\uB2E4. (\uB0A8\uCE21 \uC218\uB825\uBC1C\uC804\uC740 1931\uB144 \uC6B4\uC554\uC218\uB825(2,560\u33BE\xD72\uAE30)\uC774 \uCD5C\uCD08\uC774\uB2E4.)"
  },
  {
    year: 1930,
    question: "\uD55C\uBC18\uB3C4 \uCD5C\uCD08\uC758 \uB300\uADDC\uBAA8 \uD654\uB825\uBC1C\uC804\uC18C \uC138\uC6CC\uC9D0.\n",
    description: "1930\uB144 \uD604 \uC11C\uC6B8 \uB9C8\uD3EC\uAD6C\uC5D0 \uC11D\uD0C4\uD654\uB825\uBC1C\uC804\uC18C\uC778 \uB2F9\uC778\uB9AC \uBC1C\uC804\uC18C 1\uD638\uAE30\uAC00 \uC138\uC6CC\uC9D0. (1936\uB144 2\uD638\uAE30, 1956\uB144 3\uD638\uAE30\uAC00\uAC00 \uC900\uACF5)"
  },
  {
    year: 1931,
    question: "\uB9CC\uC8FC\uC0AC\uBCC0\uC774 \uBC1C\uBC1C.\n",
    description: "\uC911\uD654\uBBFC\uAD6D\uACFC \uC77C\uBCF8\uC758 \uC804\uC7C1\uC5D0\uC11C \uC77C\uBCF8\uC774 \uC2B9\uB9AC\uD568. \uADF8 \uACB0\uACFC\uB85C \uB9CC\uC8FC\uAD6D\uC774 \uC218\uB9BD\uB418\uB294\uB4F1 \uC77C\uBCF8\uC758 \uAD70\uAD6D\uC8FC\uC758\uC801 \uC131\uD5A5\uC774 \uADF9\uB300\uD654, \uB3C5\uB9BD\uC6B4\uB3D9\uC740 \uCE68\uCCB4\uB97C \uB9DE\uAC8C\uB428."
  },
  {
    year: 1938,
    question: "<b>\uC0BC\uC131\uADF8\uB8F9</b>\uC758 \uC804\uC2E0\uC778 \uC0BC\uC131\uC0C1\uD68C \uC124\uB9BD.\n",
    description: "1938\uB144 \uC774\uBCD1\uCCA0 \uD68C\uC7A5\uC774 \uB300\uAD6C\uB97C \uC5F0\uACE0\uB85C \uD558\uC5EC \uC138\uC6B4 \uAE30\uC5C5\uC774\uC790 \uC9C0\uAE08\uC758 \uC0BC\uC131\uADF8\uB8F9\uC758 \uC804\uC2E0, \uADF8 \uC911\uC5D0\uC11C\uB3C4 \uC0BC\uC131\uBB3C\uC0B0\uC758 \uBAA8\uD0DC\uC774\uB2E4. <br>(\uCD9C\uCC98 : \uB098\uBB34\uC704\uD0A4)"
  },
  {
    year: 1940,
    question: "\uC77C\uC81C\uAC00 \uCC3D\uC528\uAC1C\uBA85 \uAC15\uC694.\n",
    description: "1940\uB144 2\uC6D4 11\uC77C\uBD80\uD130 1945\uB144 8\uC6D4 15\uC77C \uAD11\uBCF5 \uC9C1\uC804\uAE4C\uC9C0 \uC77C\uBCF8 \uC81C\uAD6D\uC774 \uC870\uC120\uC778\uC5D0\uAC8C \uC77C\uBCF8\uC2DD \uC131\uC528\uB97C \uC815\uD558\uC5EC \uC4F0\uB3C4\uB85D \uAC15\uC694\uD568. <br>(\uCD9C\uCC98 : \uC704\uD0A4\uBC31\uACFC)"
  },
  {
    year: 1941,
    question: "\uB300\uD55C\uBBFC\uAD6D \uC784\uC2DC\uC815\uBD80\uAC00 \uC77C\uBCF8\uACFC\uC758 \uC804\uC7C1 \uC120\uD3EC",
    description: "\uC784\uC2DC\uC815\uBD80\uB294 1941\uB144 12\uC6D4 9\uC77C, \uC5F0\uD569\uAD70\uC5D0 \uAC00\uB2F4\uD574 \uC77C\uBCF8\uACFC \uB3C5\uC77C\uC5D0 \uB300\uD574 \uC120\uC804\uD3EC\uACE0\uB97C \uBC1C\uD45C, \uC774\uD6C4 \uAD11\uBCF5\uAD70\uC740 \uC5F0\uD569\uAD70\uACFC \uC5F0\uD569\uC791\uC804\uC744 \uC2DC\uD589\uD558\uC600\uB2E4."
  },
  {
    year: 1945,
    question: "\uB300\uD55C\uBBFC\uAD6D\uC774 \uC77C\uBCF8\uC73C\uB85C\uBD80\uD130 <b>\uB3C5\uB9BD</b>\uD55C \uB144\uB3C4\uB294?",
    description: "1945\uB144 8\uC6D4 15\uC77C \uB300\uD55C\uBBFC\uAD6D\uC740 \uB3C5\uB9BD\uD558\uC600\uB2E4."
  },
  {
    year: 1948,
    question: "\uAD6D\uAC00 3\uC694\uC18C \uC218\uB9BD\uAE30\uC900\uC758 \uB300\uD55C\uBBFC\uAD6D \uAC74\uAD6D.\n",
    description: "1948\uB144 5\uC6D4 10\uC77C \uCD1D\uC120\uAC70\uB97C \uD1B5\uD574 \uC81C\uD5CC\uAD6D\uD68C\uB97C \uAD6C\uC131, 8\uC6D4 15\uC77C\uC5D0 \uB300\uD55C\uBBFC\uAD6D \uC815\uBD80\uB97C \uC218\uB9BD\uC744 \uD558\uC600\uB2E4. \uAD6D\uD68C\uC758\uC6D0\uB4E4\uC758 \uAC04\uC811\uC120\uAC70\uB85C \uCD08\uB300 \uB300\uD1B5\uB839 \uC774\uC2B9\uB9CC\uC774 \uC120\uCD9C\uB418\uC5C8\uB2E4. <br>(\uCD9C\uCC98 : \uC704\uD0A4\uBC31\uACFC)"
  },
  {
    year: 1950,
    question: "\uBD81\uD55C \uACF5\uC0B0\uB2F9 \uC138\uB825\uC758 \uBD88\uBC95<b>\uB0A8\uCE68</b>\uC73C\uB85C <b>6.25\uC804\uC7C1</b> \uBC1C\uBC1C.\n",
    description: "1950\uB144 6\uC6D4 25\uC77C \uBD81\uD55C\uC774 \uB0A8\uCE68\uC744 \uC2DC\uC791\uD558\uBA70 \uC804\uC7C1\uC774 \uC2DC\uC791\uB418\uC5C8\uB2E4"
  },
  {
    year: 1950,
    question: "\uAD6D\uAD70\uC774 \uBD81\uD55C\uC73C\uB85C\uBD80\uD130 \uD3C9\uC591\uC744 \uD0C8\uD658\uD588\uB358 \uB144\uB3C4\n",
    description: "1950\uB144 6.25\uC804\uC7C1\uC744 \uC77C\uC73C\uD0A8 \uBD81\uD55C\uC73C\uB85C\uBD80\uD130 \uAC19\uC740\uD574\uC778 1950\uB144 10\uC6D4 19\uC77C \uB300\uD55C\uBBFC\uAD6D\uC740 \uD3C9\uC591\uAE4C\uC9C0 \uC810\uB839\uD588\uB2E4."
  },
  {
    year: 1953,
    question: "<b>\uD55C\uAD6D\uC804\uC7C1</b>\uC758 \uC815\uC804\uD611\uC815\uC774 \uC774\uB904\uC9C4 \uB144\uB3C4\uB294?",
    description: "1953\uB144 7\uC6D4 27\uC77C 10\uC2DC \uD310\uBB38\uC810\uC5D0\uC11C \uD55C\uAD6D\uC5B4, \uC601\uBB38, \uC911\uBB38\uC73C\uB85C \uC791\uC131\uB41C \uC815\uC804\uD611\uC815\uC774 \uCCB4\uACB0\uB418\uC5C8\uB2E4."
  },
  {
    year: 1955,
    question: "\uC6B0\uB9AC\uB098\uB77C \uCD5C\uCD08\uC758 \uC790\uB3D9\uCC28 '\uC2DC\uBC1C' \uACF5\uAC1C",
    description: "\uAD6D\uC81C\uCC28\uB7C9\uACF5\uC5C5\uC0AC\uC5D0\uC11C \uC218\uACF5\uC5C5\uC73C\uB85C \uC9C0\uD504\uD615 \uCC28\uB7C9\uC744 \uAC1C\uBC1C\uD558\uC5EC 1955\uB144 \uC0B0\uC5C5\uBC15\uB78C\uD68C\uC5D0 \uCD9C\uD488\uD558\uC5EC \uB300\uD1B5\uB839\uC0C1\uC744 \uBC1B\uC74C. \uC601\uC5C5\uC6A9 \uD0DD\uC2DC\uB85C \uB9CE\uC774 \uC4F0\uC600\uC73C\uBA70, 2700\uC5EC \uB300\uAC00 \uC0DD\uC0B0\uB428."
  },
  {
    year: 1960,
    question: "4.19 \uD601\uBA85\uC774 \uBC1C\uC0DD\uD55C \uC5F0\uB3C4\n",
    description: "1960\uB144 4\uC6D4, \uB300\uD55C\uBBFC\uAD6D\uC5D0\uC11C \uC774\uC2B9\uB9CC \uC815\uAD8C\uC758 \uB3C5\uC7AC\uC5D0 \uD56D\uAC70\uD574 \uC2DC\uBBFC\uB4E4\uC774 \uB4E4\uACE0 \uC77C\uC5B4\uB098\uC11C \uB300\uD55C\uBBFC\uAD6D \uC81C1\uACF5\uD654\uAD6D\uC744 \uB05D\uB0B8 \uBBFC\uC8FC\uC8FC\uC758 \uC2DC\uBBFC \uD601\uBA85\uC774\uB2E4. <br>(\uCD9C\uCC98 : \uB098\uBB34\uC704\uD0A4)"
  },
  {
    year: 1961,
    question: "5.16 \uAD70\uC0AC\uC815\uBCC0\uC774 \uBC1C\uC0DD\uD55C \uC5F0\uB3C4\n",
    description: "1961\uB144 5\uC6D4 16\uC77C \uBC15\uC815\uD76C \uC18C\uC7A5\uC744 \uBE44\uB86F\uD55C \uB300\uD55C\uBBFC\uAD6D \uC721\uAD70 \uC7A5\uAD50\uB4E4\uC774 \uAD70\uC0AC\uC815\uBCC0\uC744 \uC77C\uC73C\uCF30\uB2E4. \uC81C2\uACF5\uD654\uAD6D\uC758 \uC7A5\uBA74 \uB0B4\uAC01\uC740 \uCD9C\uBC94 9\uAC1C\uC6D4 \uB9CC\uC5D0 \uC0AC\uB77C\uC84C\uACE0 \uBC15\uC815\uD76C\uB97C \uC218\uBC18\uC73C\uB85C \uD558\uB294 \uAD6D\uAC00\uC7AC\uAC74\uCD5C\uACE0\uD68C\uC758\uAC00 \uB4F1\uC7A5\uD558\uC600\uB2E4. <br>(\uCD9C\uCC98 : \uB098\uBB34\uC704\uD0A4)"
  },
  {
    year: 1963,
    question: "'\uC11C\uB3C5 \uD30C\uACAC \uD55C\uAD6D \uAD11\uBD80 \uC784\uC2DC \uACE0\uC6A9\uACC4\uD68D'\uC5D0 \uB530\uB978 \uAD11\uBD80\uC758 \uB3C5\uC77C \uD30C\uACAC \uC2DC\uC791\n",
    description: "\u2018\uC11C\uB3C5 \uD30C\uACAC \uD55C\uAD6D \uAD11\uBD80 \uC784\uC2DC \uACE0\uC6A9\uACC4\uD68D\u2019\uC73C\uB85C 1963\uB144 12\uC6D4 \uD55C\uAD6D\uACFC \uC11C\uB3C5 \uAC04\uC5D0 \uD611\uC815\uC774 \uC774\uB8E8\uC5B4\uC84C\uB2E4. 1963\uB144\uBD80\uD130 1977\uB144\uAE4C\uC9C0 \uC57D 8\uCC9C \uBA85\uC758 \uAD11\uBD80\uAC00 \uD30C\uACAC\uB418\uC5C8\uB2E4"
  },
  {
    year: 1964,
    question: "\uD55C\uAD6D\uC758 \uBCA0\uD2B8\uB0A8\uC804 \uCC38\uC804 (\uCCAB \uD30C\uBCD1\uC5F0\uB3C4) .\n",
    description: "\uBBF8\uAD6D\uACFC \uC6D4\uB0A8 \uC815\uBD80\uAC00 \uD55C\uAD6D\uC5D0 \uD30C\uBCD1\uC744 \uC694\uCCAD. \uD55C\uAD6D\uC815\uBD80\uB294 1\uCC28\uB85C \uC774\uB3D9\uC678\uACFC\uBCD1\uC6D0\uC694\uC6D0 100\uC5EC\uBA85\uACFC \uD0DC\uAD8C\uB3C4 \uAD50\uAD00\uB2E8 \uC694\uC6D0 10\uC5EC\uBA85\uC744 \uBCF4\uB0C8\uB2E4. 1964\uB144 9\uC6D4~ 1973\uB144 3\uC6D4\uAE4C\uC9C0 \uCD1D 4\uCC28\uB840 \uD30C\uBCD1\uD558\uC600\uB2E4."
  },
  {
    year: 1966,
    question: "\uD55C\uAD6D \uAC04\uD638\uC0AC\uC758 \uB3C5\uC77C \uD30C\uACAC\uC5D0 \uAD00\uD55C \uACF5\uC2DD \uD611\uC815\uC5D0 \uB530\uB978 \uB300\uADDC\uBAA8 \uD30C\uACAC \uC2DC\uC791\uC5F0\uB3C4\n",
    description: "\uC815\uBD80\uC5D0\uC11C \uACF5\uC2DD\uC73C\uB85C \uD30C\uACAC\uC774 \uC2DC\uC791\uB41C 1966\uB144\uBD80\uD130 10\uB144\uAC04 \uC11C\uB3C5\uC5D0 \uD30C\uACAC\uB41C \uAC04\uD638\uC0AC,\uAC04\uD638\uC870\uBB34\uC0AC\uB294 \uC57D 1\uB9CC1\uCC9C\uBA85\uC774\uB2E4."
  },
  {
    year: 1968,
    question: "\uD3EC\uD56D\uC885\uD569\uC81C\uCCA0\uC8FC\uC2DD\uD68C\uC0AC \uC124\uB9BD\n",
    description: "1968\uB144 4\uC6D4 \uD3EC\uD56D\uC885\uD569\uC81C\uCCA0\uC8FC\uC2DD\uD68C\uC0AC\uAC00 \uC124\uB9BD\uB418\uC5C8\uB2E4. (2002\uB144 3\uC6D4 '\uC8FC\uC2DD\uD68C\uC0AC \uD3EC\uC2A4\uCF54(POSCO)'\uB85C \uBCC0\uACBD\uB418\uC5C8\uB2E4)"
  },
  {
    year: 1969,
    question: "<b>\uC0BC\uC131\uC804\uC790</b> \uCC3D\uB9BD.\n",
    description: "\uC0BC\uC131\uC740 \uC2DD\uD488\uACFC \uC758\uBCF5\uC758 \uC8FC\uB825\uC0AC\uC5C5\uC774\uC5C8\uC73C\uB098 \uBC15\uC815\uD76C \uB300\uD1B5\uB839\uACFC\uC758 \uD68C\uB3D9\uC744 \uACC4\uAE30\uB85C, 1969\uB144 1\uC6D4 19\uC77C \uC0BC\uC131\uC804\uC790\uB97C \uCC3D\uB9BD\uD558\uC600\uB2E4."
  },
  {
    year: 1970,
    question: "<b>\uC0C8\uB9C8\uC744\uC6B4\uB3D9</b>\uC774 \uC2DC\uC791\uB428.\n",
    description: "\uC0C8\uB9C8\uC744\uC6B4\uB3D9\uC740 1970\uB144 \uBC15\uC815\uD76C \uB300\uD1B5\uB839\uC758 \uBC1C\uC758\uB85C \uC2DC\uC791\uB41C \uB18D\uCD0C\uC885\uD569\uAC1C\uBC1C\uC6B4\uB3D9\uC774\uB2E4, \uC774\uD6C4 \uAE30\uBC18\uC870\uC131\uB2E8\uACC4(1971~73)\uAC00 \uC2DC\uC791. \uACBD\uC81C\uB09C \uD68C\uBCF5, \uB18D\uC5B4\uCD0C \uD604\uB300\uD654 \uB4F1\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uB2E4."
  },
  {
    year: 1975,
    question: "\uB0A8\uC0B0\uD0C0\uC6CC(\uD604 N Seoul Tower) \uC644\uACF5.\n",
    description: "\uD604\uB300 \uC11C\uC6B8\uC758 \uC0C1\uC9D5\uBB3C \uC911 \uD558\uB098\uC778 \uB0A8\uC0B0\uD0C0\uC6CC\uAC00 75\uB144\uC5D0 \uC644\uACF5\uB428"
  },
  {
    year: 1975,
    question: "\uD604\uB300\uC790\uB3D9\uCC28\uAC00 \uCD5C\uCD08\uC758 \uACE0\uC720\uBAA8\uB378\uC778 <b>'\uD3EC\uB2C8'</b> \uC0DD\uC0B0 \uC2DC\uC791.\n",
    description: "\uD604\uB300\uCC28\uC758 '\uD3EC\uB2C8'\uB294 1975\uB144 12\uC6D4 \uC0DD\uC0B0\uC774 \uC2DC\uC791\uB418\uC5C8\uB2E4."
  },
  {
    year: 1977,
    question: "<b>100\uC5B5\uB2EC\uB7EC</b> \uC218\uCD9C \uB2EC\uC131.\n",
    description: "1977\uB144 \uB300\uD55C\uBBFC\uAD6D\uC774 \uCCAB 100\uC5B5\uB2EC\uB7EC \uC218\uCD9C\uC744 \uB2EC\uC131\uD558\uC600\uB2E4. \uC218\uCD9C 1\uC5B5 \uB2EC\uB7EC \uB2EC\uC131(1964\uB144) \uC774\uD6C4 13\uB144\uB9CC\uC5D0 \uC774\uB904\uB0B8 \uC131\uACFC\uB2E4."
  },
  {
    year: 1978,
    question: "\uC6B0\uB9AC\uB098\uB77C \uCD5C\uCD08\uC758 \uC6D0\uC790\uB825 \uBC1C\uC804\uC18C \uC6B4\uC804\uC2DC\uC791.\n",
    description: "\uACE0\uB9AC\uC6D0\uC790\uB825 1\uD638\uAE30\uAC00 1978\uB144 \uC900\uACF5\uD558\uC5EC \uC0C1\uC5C5\uC6B4\uC804\uC744 \uAC1C\uC2DC\uD568."
  },
  {
    year: 1979,
    question: "12.12\uC0AC\uD0DC \uBC1C\uC0DD\uC5F0\uB3C4 (\uC804\uB450\uD658 \uAD70\uC0AC \uCFE0\uD14C\uD0C0).\n",
    description: "1979\uB144 12\uC6D4 12\uC77C, \uB300\uD55C\uBBFC\uAD6D \uC721\uAD70 \uB0B4 \uC0AC\uC870\uC9C1 \uD558\uB098\uD68C\uC758 \uBA64\uBC84 \uC804\uB450\uD658\uC774 \uC8FC\uB3C4\uD558\uC5EC \uC77C\uC73C\uD0A8 \uAD70\uC0AC \uCFE0\uB370\uD0C0. \uC81C5\uACF5\uD654\uAD6D\uC758 \uC2E4\uC9C8\uC801\uC778 \uC2DC\uC791\uC774 \uB418\uB294 \uC0AC\uAC74\uC774\uB2E4. <br>(\uCD9C\uCC98 : \uB098\uBB34\uC704\uD0A4)"
  },
  {
    year: 1983,
    question: "'\uC774\uC0B0\uAC00\uC871\uC744 \uCC3E\uC2B5\uB2C8\uB2E4' \uBC29\uC1A1\uC5F0\uB3C4 \n",
    description: "\uC804\uC7C1 \uD734\uC804 30\uC8FC\uB144\uC744 \uB9DE\uC544 \uAD6D\uC601\uBC29\uC1A1 KBS\uB294 \uD2B9\uBCC4\uC0DD\uBC29\uC1A1\uC73C\uB85C \uC138\uACC4 \uCD5C\uCD08/\uCD5C\uB300 \uADDC\uBAA8\uC758 \uC774\uC0B0\uAC00\uC871 \uCC3E\uC544\uC8FC\uAE30 \uBC29\uC1A1\uC744 \uC9C4\uD589\uD588\uB2E4."
  },
  {
    year: 1987,
    question: "\uB300\uD55C\uBBFC\uAD6D \uB300\uD1B5\uB839 \uC9C1\uC120\uC81C(5\uB144 \uB2E8\uC784)\uAC00 \uD655\uC815\uB41C \uD5CC\uBC95\uAC1C\uC815 (6\uACF5\uD654\uAD6D).\n",
    description: "1987\uB144 6\uC6D4 29\uC77C, \uC9D1\uAD8C\uB2F9 \uB300\uD45C\uC600\uB358 \uB178\uD0DC\uC6B0\uAC00 6.29\uBBFC\uC8FC\uD654\uC120\uC5B8\uC744 \uC804\uACA9 \uBC1C\uD45C\uD558\uACE0. \uADF8\uD574 \uB9D0 \uAC1C\uD5CC\uC744 \uD1B5\uD574 \uD55C\uAD6D \uB300\uD1B5\uB839 \uC81C\uB3C4\uB294 \uC624\uB298\uB0A0\uC758 \uC9C1\uC120\uC81C, 5\uB144 \uB2E8\uC784\uC73C\uB85C \uC815\uCC29\uB418\uC5C8\uB2E4."
  },
  {
    year: 1988,
    question: "\uCF54\uC5D1\uC2A4 \uD2B8\uB808\uC774\uB4DC\uD0C0\uC6CC(Trade Tower) \uC644\uACF5.\n",
    description: "\uC9C0\uC0C1 55\uCE35(229m), \uC9C0\uD558 2\uCE35 \uAC74\uBB3C. 1988\uB144  \uC644\uACF5\uD558\uC5EC \uAC1C\uC7A5\uD558\uC600\uB2E4."
  },
  {
    year: 1988,
    question: "\uC11C\uC6B8 \uC62C\uB9BC\uD53D \uAC1C\uCD5C.\n",
    description: "1988\uB144 9\uC6D4 17\uC77C \uC11C\uC6B8\uC62C\uB9BC\uD53D\uC774 \uAC1C\uCD5C\uD588\uB2E4."
  },
  {
    year: 1993,
    question: "\uB300\uC804 \uC5D1\uC2A4\uD3EC \uAC1C\uCD5C.\n",
    description: "\uB300\uD55C\uBBFC\uAD6D \uB300\uC804\uAD11\uC5ED\uC2DC \uC720\uC131\uAD6C \uB300\uB355\uC5F0\uAD6C\uAC1C\uBC1C\uD2B9\uAD6C\uC5D0\uC11C \uC5F4\uB9B0 \uC5D1\uC2A4\uD3EC. 1993\uB144 8\uC6D4 7\uC77C\uBD80\uD130 11\uC6D4 7\uC77C\uAE4C\uC9C0 93\uC77C \uB3D9\uC548 \uAC1C\uCD5C\uB418\uC5C8\uB2E4."
  },
  {
    year: 1995,
    question: "\uCC98\uC74C\uC73C\uB85C \uC218\uCD9C 1,000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131.\n",
    description: "1988\uB144 \uCC98\uC74C\uC73C\uB85C \uC5F0\uAC04 \uC218\uCD9C \uC2E4\uC801 1000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131\uD588\uB2E4."
  },
  {
    year: 1997,
    question: "\uC544\uC2DC\uC544 \uAE08\uC735\uC704\uAE30\uC758 \uC601\uD5A5\uC73C\uB85C \uD55C\uAD6D \uACBD\uC81C \uBD80\uB3C4 \uC120\uC5B8 (IMF).\n",
    description: "\uD55C\uAD6D\uC740\uD589\uC758 \uBCF4\uC720\uC678\uD658\uC774 \uC18C\uC9C4\uB418\uC5B4 \uAD6D\uAC00\uBD80\uB3C4\uC758 \uC704\uAE30\uC5D0 \uCC98\uD558\uAC8C \uB418\uC5C8\uACE0, \uD55C\uAD6D\uC815\uBD80\uB294 IMF\uC758 \uAD6C\uC870\uC870\uC815 \uC694\uAD6C\uB97C \uBC1B\uC544\uB4E4\uC774\uB294 \uC870\uAC74\uC73C\uB85C \uAD6C\uC81C\uAE08\uC735\uC744 \uBC1B\uAC8C \uB418\uC5C8\uB2E4."
  },
  {
    year: 2002,
    question: "\uD55C\uC77C \uC6D4\uB4DC\uCEF5 \uAC1C\uCD5C\n",
    description: "2002\uB144\uC5D0 \uD55C\uC77C \uC6D4\uB4DC\uCEF5\uC774 \uAC1C\uCD5C\uB428. \uC774 \uC6D4\uB4DC\uCEF5\uC5D0\uC11C \uB300\uD55C\uBBFC\uAD6D \uCD95\uAD6C\uD300\uC740 4\uAC15\uC5D0 \uC9C4\uCD9C\uD558\uC600\uB2E4."
  },
  {
    year: 2006,
    question: "\uC138\uACC4 11\uBC88\uC9F8\uB85C \uC218\uCD9C 3,000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131.\n",
    description: "2006\uB144 \uC138\uACC4 11\uBC88\uC9F8\uB85C \uC218\uCD9C 3,000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131"
  },
  {
    year: 2010,
    question: "G20 \uC11C\uC6B8 \uC815\uC0C1\uD68C\uC758 \uAC1C\uCD5C.\n",
    description: "2010\uB144 11\uC6D4 11\uC77C G20 \uC815\uC0C1\uD68C\uB2F4\uC774 \uAC1C\uCD5C\uB418\uC5C8\uB2E4. \uC774\uB54C G7 \uAD6D\uAC00\uAC00 \uC544\uB2CC \uAD6D\uAC00\uC5D0\uC11C G20\uD68C\uB2F4\uC744 \uAC1C\uCD5C\uD558\uB294 \uAC83\uC740 \uD55C\uAD6D\uC774 \uCD5C\uCD08\uC600\uB2E4."
  },
  {
    year: 2011,
    question: "\uC138\uACC4 8\uBC88\uC9F8\uB85C \uC218\uCD9C 5,000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131.\n",
    description: "2011\uB144 \uCC98\uC74C\uC73C\uB85C \uC5F0\uAC04 \uC218\uCD9C \uC2E4\uC801 5000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131\uD588\uB2E4."
  },
  {
    year: 2012,
    question: "\uC5EC\uC218 \uC5D1\uC2A4\uD3EC \uAC1C\uCD5C.\n",
    description: "\uC804\uB77C\uB0A8\uB3C4 \uC5EC\uC218\uC2DC \uC5EC\uC218\uD56D\uC77C\uB300\uC5D0\uC11C \uC5F4\uB9B0 \uC5D1\uC2A4\uD3EC. 2012\uB144 5\uC6D4 12\uC77C\uBD80\uD130 8\uC6D4 12\uC77C\uAE4C\uC9C0 93\uC77C\uAC04 \uAC1C\uCD5C\uB418\uC5C8\uB2E4."
  },
  {
    year: 2016,
    question: "\uB86F\uB370\uC6D4\uB4DC\uD0C0\uC6CC(Lotte World Tower) \uC644\uACF5 (\uAC1C\uC7A5\uC5F0\uB3C4 \uC544\uB2D8).\n",
    description: "\uB300\uD55C\uBBFC\uAD6D \uCD5C\uACE0\uB192\uC774 (555m) \uAC74\uCD95\uBB3C\uC778 \uB86F\uB370\uC6D4\uB4DC\uD0C0\uC6CC\uB294 2016\uB144 12\uC6D4 22\uC77C \uC644\uACF5, 2017\uB144 4\uC6D4 3\uC77C \uAC1C\uC7A5\uD558\uC600\uB2E4."
  },
  {
    year: 2018,
    question: "\uC138\uACC4 7\uBC88\uC9F8\uB85C \uC218\uCD9C 6,000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131.\n",
    description: "2018\uB144 \uC138\uACC4 7\uBC88\uC9F8\uB85C \uC218\uCD9C 6,000\uC5B5 \uB2EC\uB7EC\uB97C \uB2EC\uC131"
  }
];
const quizKorHistory = {
  title,
  quiz_mode,
  year_range,
  default_life,
  quiz_max,
  score_level,
  question_list
};
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const InputSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { current } = $$props;
  let { enterGuess } = $$props;
  let { year_range_start = 1900 } = $$props;
  let { year_range_end = 2022 } = $$props;
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.enterGuess === void 0 && $$bindings.enterGuess && enterGuess !== void 0)
    $$bindings.enterGuess(enterGuess);
  if ($$props.year_range_start === void 0 && $$bindings.year_range_start && year_range_start !== void 0)
    $$bindings.year_range_start(year_range_start);
  if ($$props.year_range_end === void 0 && $$bindings.year_range_end && year_range_end !== void 0)
    $$bindings.year_range_end(year_range_end);
  return `<div>\uC544\uB9C8\uB3C4 <b>${escape(current)}</b> \uB144?
</div>

<input type="${"range"}"${add_attribute("min", year_range_start, 0)}${add_attribute("max", year_range_end, 0)} class="${"range"}" id="${"myRange"}" style="${"width: 100%;"}"${add_attribute("value", current, 0)}>

${slots.default ? slots.default({}) : `

`}

<div><br>
    <button class="${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"}">\uD655\uC778
    </button>
</div>`;
});
const css$1 = {
  code: ".red.svelte-wxrrqn{color:red}",
  map: null
};
const ResultSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { questionAnswerMap } = $$props;
  let { current } = $$props;
  let { questionIdx } = $$props;
  let { lifeLost } = $$props;
  if ($$props.questionAnswerMap === void 0 && $$bindings.questionAnswerMap && questionAnswerMap !== void 0)
    $$bindings.questionAnswerMap(questionAnswerMap);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.questionIdx === void 0 && $$bindings.questionIdx && questionIdx !== void 0)
    $$bindings.questionIdx(questionIdx);
  if ($$props.lifeLost === void 0 && $$bindings.lifeLost && lifeLost !== void 0)
    $$bindings.lifeLost(lifeLost);
  $$result.css.add(css$1);
  return `<div>\uB2F9\uC2E0\uC758 \uC120\uD0DD <b>${escape(current)}</b>\uB144 - <span>\uC815\uB2F5 <b>${escape(questionAnswerMap[questionIdx].year)}</b>\uB144</span></div>
<div>${current === questionAnswerMap[questionIdx].year ? `<span>\uC815\uB2F5\uC785\uB2C8\uB2E4!
        </span>` : `<span>\uD2C0\uB838\uC2B5\uB2C8\uB2E4! (<b class="${"red svelte-wxrrqn"}">${escape(lifeLost)}</b>\uB144 \uCC28\uC774)
        </span>`}</div>

${slots.default ? slots.default({}) : `

`}`;
});
let url = "https://time-game.pages.dev/";
const NextBtns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAlive } = $$props;
  let { nextQuestion } = $$props;
  let { retry } = $$props;
  if ($$props.isAlive === void 0 && $$bindings.isAlive && isAlive !== void 0)
    $$bindings.isAlive(isAlive);
  if ($$props.nextQuestion === void 0 && $$bindings.nextQuestion && nextQuestion !== void 0)
    $$bindings.nextQuestion(nextQuestion);
  if ($$props.retry === void 0 && $$bindings.retry && retry !== void 0)
    $$bindings.retry(retry);
  return `<div>${isAlive() ? `<button class="${"btn btn-outline"}">\uB2E4\uC74C\uBB38\uC81C</button>` : `<div>\uAC8C\uC784\uC774 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4</div>
        <div>\uACF5\uC720\uD558\uAE30</div>
        
        <div>
            <a href="${"https://twitter.com/intent/tweet?text=\uD55C\uAD6D\uC778 \uC0C1\uC2DD\uC218\uC900 \uCE21\uC815\uAE30&url=" + escape(url, true)}" class="${"btn m-2 gap-2"}" data-size="${"large"}" target="${"_blank"}" data-show-count="${"false"}"><i class="${"fa-brands fa-twitter"}"></i>
            
                <span>\uD2B8\uC704\uD130\uB85C \uACF5\uC720\uD558\uAE30
                </span></a></div>
        
        <div>
            <a href="${"https://www.facebook.com/sharer/sharer.php?u=" + escape(url, true)}" class="${"btn m-2 gap-2"}" data-size="${"large"}" target="${"_blank"}" data-show-count="${"false"}"><i class="${"fa-brands fa-facebook"}"></i>
                \uD398\uC774\uC2A4\uBD81\uC73C\uB85C \uACF5\uC720\uD558\uAE30</a></div>
        
        <div><button class="${"btn m-2 gap-2"}"><i class="${"fa-solid fa-share-nodes"}"></i>
            \uB9C1\uD06C \uBCF5\uC0AC\uD558\uAE30</button></div>

        <button class="${"btn btn-outline"}">\uB2E4\uC2DC\uD558\uAE30</button>`}</div>`;
});
const css = {
  code: ".quiz_title.svelte-mz1o3g{font-size:20px;font-weight:500}.card.svelte-mz1o3g{margin:10px;padding:10px 20px;line-height:40px;background-color:rgba(255, 255, 255, 0.1);transition:1s}",
  map: null
};
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $animatedLife, $$unsubscribe_animatedLife;
  let { quizdata = quizKorHistory } = $$props;
  let { is_game_mode = true } = $$props;
  const quiz_title = quizdata["title"];
  const yearRange = quizdata["year_range"];
  const questionAnswerMap = quizdata["question_list"];
  let score = 0;
  let life = quizdata["default_life"];
  let lifeLost = 0;
  let current = Math.ceil((yearRange.start + yearRange.end) / 2);
  let mode = "input";
  let showNextBtn = false;
  let questionIdx = 0;
  questionAnswerMap.sort(() => Math.random() - 0.5);
  let showAnswer = questionAnswerMap[questionIdx].year;
  let animatedLife = tweened(life, {
    interpolate: (frm, to) => (t) => Math.floor(frm + (to - frm) * t)
  });
  $$unsubscribe_animatedLife = subscribe(animatedLife, (value) => $animatedLife = value);
  let lifeAnimationTimeout;
  let score_level2 = "\uCE21\uC815\uC911..";
  const updateScoreLevel = () => {
    try {
      if (score > 0 && quizdata["score_level"][score.toFixed(0)]) {
        score_level2 = quizdata["score_level"][score.toFixed(0)];
      }
    } catch {
      console.log("skip calculate score_level");
    }
  };
  const enterGuess = () => {
    if (current !== questionAnswerMap[questionIdx].year) {
      lifeLost = Math.abs(current - showAnswer);
      life = Math.max(0, life - lifeLost);
      lifeAnimationTimeout = setTimeout(
        () => {
          animatedLife.set(life);
        },
        2e3
      );
    } else {
      score += 1;
    }
    mode = "result";
    showNextBtn = true;
    updateScoreLevel();
  };
  const nextQuestion = () => {
    questionIdx += 1;
    mode = "input";
    showNextBtn = false;
    showAnswer = questionAnswerMap[questionIdx].year;
    clearTimeout(lifeAnimationTimeout);
    animatedLife.set(life);
  };
  const retry = () => {
    questionAnswerMap.sort(() => Math.random() - 0.5);
    questionIdx = 0;
    showAnswer = questionAnswerMap[questionIdx].year;
    score = 0;
    life = 100;
    mode = "input";
    showNextBtn = false;
    animatedLife.set(life);
    score_level2 = "\uCE21\uC815\uC911..";
  };
  const isAlive = () => {
    return life > 0 && questionAnswerMap.length - 1 > questionIdx && quizdata["quiz_max"] > questionIdx;
  };
  if ($$props.quizdata === void 0 && $$bindings.quizdata && quizdata !== void 0)
    $$bindings.quizdata(quizdata);
  if ($$props.is_game_mode === void 0 && $$bindings.is_game_mode && is_game_mode !== void 0)
    $$bindings.is_game_mode(is_game_mode);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h2 class="${"quiz_title svelte-mz1o3g"}">${escape(quiz_title)}</h2>

<h3 class="${"quiz_title svelte-mz1o3g"}">(${escape(score_level2)}) </h3> 

<div class="${"card svelte-mz1o3g"}"><div class="${"text-lg font-bold"}"><span>Score 
      
        <span style="${"display: inline-block"}">${escape(score)}</span></span>
   <span>\u2764\uFE0Fx${escape($animatedLife)}</span></div>
  <br>
  <div class="${"text-xl font-bold"}">Quiz ${escape(questionIdx + 1)}.
  </div>
  <div>\uC5B8\uC81C\uC77C\uAE4C? <!-- HTML_TAG_START -->${questionAnswerMap[questionIdx].question}<!-- HTML_TAG_END --></div>
  ${mode === "input" ? `${validate_component(InputSection, "InputSection").$$render(
      $$result,
      {
        enterGuess,
        year_range_start: yearRange.start,
        year_range_end: yearRange.end,
        current
      },
      {
        current: ($$value) => {
          current = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${mode === "result" ? `${validate_component(ResultSection, "ResultSection").$$render(
      $$result,
      {
        questionAnswerMap,
        current,
        questionIdx,
        lifeLost
      },
      {},
      {
        default: () => {
          return `<div class="${"p-4 m-2 bg-gray-200 border-green-900 rounded-md text-sm"}"><!-- HTML_TAG_START -->${questionAnswerMap[questionIdx].description}<!-- HTML_TAG_END --></div>`;
        }
      }
    )}` : ``}`}

  ${showNextBtn ? `${validate_component(NextBtns, "NextBtns").$$render($$result, { isAlive, nextQuestion, retry }, {}, {})}` : ``}</div>

<button>\uBA54\uC778\uC73C\uB85C
</button>`;
  } while (!$$settled);
  $$unsubscribe_animatedLife();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let is_game_mode = true;
  let quizData = quizKorHistory;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-xnnt66_START -->${$$result.title = `<title>\uD55C\uAD6D\uC0AC \uC218\uC900 \uCE21\uC815\uAE30</title>`, ""}<!-- HEAD_svelte-xnnt66_END -->`, ""}

<main><div class="${"card"}"><div class="${"quiz_section"}">${validate_component(Game, "Game").$$render(
      $$result,
      { quizdata: quizData, is_game_mode },
      {
        is_game_mode: ($$value) => {
          is_game_mode = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
