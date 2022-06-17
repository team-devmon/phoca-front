import { styled } from "styletron-react";

export const VocabularyWrapper = styled(
  "div",
  (props: { $sideBarWidth: string; $headerHeight?: string }) => ({
    display: "flex",
    alignItems: "center",
    height: `calc(100vh - ${props.$headerHeight})`,
    marginLeft: props.$sideBarWidth,
    width: `calc(100vw - ${props.$sideBarWidth}px`,
    flexDirection: "column",
    padding: "20px",
  }),
);

export const HeadWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "start",
});

export const HeadUserWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const MainText = styled("p", {
  display: "flex",
  fontSize: "2rem",
  alignItems: "center",
  marginLeft: "1.6rem",
});

export const SwitchWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignSelf: "end",
  marginTop: "2rem",
  marginRight: "4rem",
  width: "30%",
});

export const SwitchButtonText = styled("p", {
  fontSize: "1.5rem",
});

export const SwitchButtonInput = styled("input", {
  position: "absolute",
  left: "-9999px",
});

export const SwitchButton = styled("label", (props: { $checked: Boolean }) => ({
  position: "relative",
  display: "block",
  textAlign: "center",
  width: "60px",
  height: "16px",
  borderRadius: "8px",
  padding: 0,
  margin: "10px auto",
  cursor: "pointer",
  backgroundColor: "#ffaa2a",
  ":before": {
    position: "absolute",
    display: "block",
    width: "36px",
    height: "36px",
    fontFamily: "unicons",
    borderRadius: "50%",
    color: "#ffeba7",
    backgroundColor: "#102770",
    content: "'\u2190'",
    zIndex: 20,
    top: "-10px",
    left: "-10px",
    lineHeight: "2.5rem",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    transition: "all 0.5s ease",
    transform: props.$checked ? "translateX(44px) rotate(180deg)" : "",
  },
}));

export const GridItem = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "25px",
  marginTop: "1.2rem",
  width: "250px",
  height: "250px",
  cursor: "pointer",
  margin: "0 auto",
});

export const GridTextItem = styled("p", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  paddingBottom: "2.5rem",
});

export const GridWrapper = styled("div", (props: { $lapTop?: Boolean }) => ({
  display: "grid",
  width: props.$lapTop ? "87%" : "97%",
  alignSelf: "flex-start",
  gridTemplateColumns: "repeat(4, 300px)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: props.$lapTop ? "30px 15px" : "30px 10px",
  borderRadius: "30px",
  marginTop: "20px",
  paddingBottom: "15px",
  backgroundColor: "#fedda6",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    backgroundColor: "#FFECD0",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#FFAA2A",
    borderRadius: "20px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "darkgray",
    borderRadius: "20px",
  },
}));

export const BtnWrapper = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignSelf: "start",
  marginTop: "1.2rem",
});

export const LockBtn = styled("div", {
  cursor: "pointer",
  marginRight: "1.2rem",
  fontSize: "1.6rem",
});
