import { has } from "lodash";
import { Meta } from "@/components/_common/Meta";
import { ColorPaletteGenerator } from "@/components/_common/ColorPaletteGenerator";

function TestPage() {
  return (
    <>
      <Meta
        title="testing"
        description="all my tests"
        image="/web-assets/images/start.png"
      />
      <ColorPaletteGenerator />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layoutValues: { hasHeader: false, hasFooter: false },
    },
  };
}

export default TestPage;
