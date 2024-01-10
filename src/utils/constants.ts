import { Row } from "@/types/global";

// prettier-ignore
export const ROWS: Array<Row> = [
  { mainLabel: "미국 주식", subLabel: "(TIGER 미국S&P500)", key: "us", growth: 0.24, safe: 0.15 },
  { mainLabel: "한국 주식", subLabel: "(KODEX 200)", key: "kr", growth: 0.08, safe: 0.05 },
  { mainLabel: "중국 주식", subLabel: "(KODEX 차이나 CSI300)", key: "cn", growth: 0.08, safe: 0.05  },
  { mainLabel: "인도 / 남미 (UH)", subLabel: "(KODEX 인도Niftty50 / TIGER 라틴35)", key: "in", growth: 0.08, safe: 0.05  },
  { mainLabel: "금 (UH)", subLabel: "(ACE KRX 금현물)", key: "gold", growth: 0.19, safe: 0.12  },
  { mainLabel: "미국채 10년 (UH)", subLabel: "(KODEX 미국채 10년 선물)", key: "usBond30", growth: 0.07, safe: 0.045  },
  { mainLabel: "미국채 30년 (UH)", subLabel: "(ACE 미국 30년 국채액티브(H))", key: "usBond10", growth: 0.07, safe: 0.045  },
  { mainLabel: "국고채 30년", subLabel: "(KBSTAR KIS 국고채 30년 Enhanced)", key: "krBond", growth: 0.14, safe: 0.09  },
  { mainLabel: "현금성자산", subLabel: "(TIGER CD금리투자KIS(합성))", key: "liquid", growth: 0.05, safe: 0.4 },
  { mainLabel: "예수금", subLabel: "* 금액만 입력", key: "deposit", growth: 0, safe: 0 },
];
