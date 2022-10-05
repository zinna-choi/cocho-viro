import { Viro360Image } from "components/Viro360Image";
import { ViroImage } from "components/ViroImage";
import { ViroScene } from "components/ViroScene";
import "intl";
import "intl/locale-data/jsonp/ko";

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const App: React.FC = () => {
  var westLakeTowersScene = require("./WestLakeTowers");
  var backgroundImage = require("./res/westlake_towers.jpg");
  var weworkImage = require("./res/wework_title.png");
  const [animate, setAnimate] = useState(false);

  const onBackgroundPhotoLoadEnd = () => {
    setAnimate(false);
  };

  const onTitleClicked = (props: any) => {
    props.sceneNavigator.push({ scene: westLakeTowersScene });
  };
  return (
    <ViroScene style={styles.container}>
      <Viro360Image
        source={backgroundImage}
        onLoadEnd={onBackgroundPhotoLoadEnd}
      />

      <ViroImage
        position={[0, 0, -5]}
        source={weworkImage}
        scale={[0.1, 0.1, 0.1]}
        opacity={0.0}
        onClick={(val) => onTitleClicked(val)}
        animation={{
          name: "showTitleAnimation",
          run: animate,
          loop: false,
        }}
      />
    </ViroScene>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
