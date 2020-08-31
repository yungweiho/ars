<template lang="pug">
  
</template>

<script>
export default {
  data() {
    return {
      kt14_data: [
        {
          project: 'K. T. Creativity Award',
          subtitle: 'K.T.14 in Tsing Hua',
          works: [
            {
              title: 'Crazy Zero 2',
              description: '〈Crazy Zero 2〉這作品乃使用「多視角成像之線條藝術演算法（Multi-View Wire Algorithm）」生成的線性雕塑，我們利用3D列印技術將生成的虛擬雕塑模型製作成實體裝置雕塑作品。我們選擇了愛因斯坦和瑪麗蓮夢露兩位歷史上的著名瘋狂人物的圖像，使這兩位天才在虛擬空間中交會，在真實空間中合體。而透過多重視角，不管是愛因斯坦或是瑪麗蓮夢露，你只有站在其所對應相當於「O (zero)」點的座標位置，才能看清他們的容貌，+1度或-1度的位置都無法看的最清楚。真相往往只是在某個時刻才能看到，這個特定時刻就如同虛擬空間中的一組特定數據只能代表一個特定的點那樣，處在零點才能看到正確的畫面。 〈Crazy Zero 2〉讓兩個著名瘋狂人物在在真實空間中合體，在zero點的座標位置上讓瘋狂得以呈現。',
              description_en: 'Crazy Zero 2 is a wire sculpture generated with the system of “Multi-View Wire Algorithm”, and we use 3D line printing technology to turn virtual model into tangible object. We choose the images of Einstein and Marilyn Monroe, who are both famous crazy icon in history, to let these two geniuses “meet” in the virtual space while they are combined in one in reality. From multiple angles of view, audience can only see the complete face of Einstein or Marilyn Monroe when they are standing at the zero-degree angle of a particular side, the slightest deviation (even -1 or +1 degree of angle) will affect the clearness of images. Usually, truth cannot be seen until a particular moment, this very moment is like the fact that a particular data can only represent a particular point in virtual world, we can only see the right image while standing at the zero point. Crazy Zero 2 shows the combination of two crazy celebrities in real space, and the zero point presents such craziness.',
              authors: [
                {
                  name: '',
                  school: '',
                }
              ],
              authors_en: [
                {
                  name: '',
                  school: '',
                }
              ],
              pic: [
                require('../../assets/KT14/crazy/crazy_01.jpeg'),
                require('../../assets/KT14/crazy/crazy_02.jpeg'),
                require('../../assets/KT14/crazy/crazy_03.jpeg'),
              ]
            },
            {
              title: '卷積層的千絲萬縷 | Mingled Sensations in ConvNets',
              description: '近年來，人工智慧已在不同領域掀起壯闊波瀾。在這個人工智慧世代，我們的創作理念是建立一個與認知相關的人工智慧系統，再將這個系統原始且富創造性的演算過程以藝術造型呈現出來。為此我們選用了卷積神經網路（ConvNets）；其作為當代最先進人工智慧技術之一，特別適合用於視覺的識別與生成任務。首先我們設計並訓練了卷積神經網路，將輸入圖像逐層解析，並將其對空間的感知生成為中文象形字；而後將數位資訊轉換為類比呈現，讓卷積神經網路的推演過程與結構得以視覺化，特別是神經元的活化與模型權重。有別於多數現有的人工智慧藝術作品，多用以展示人工智慧的威力或反映人工智慧對於人類社會的影響，期許這件作品能幫助大家對現代人工智慧系統的內部結構有更好的認識，以多樣的角度欣賞其複雜性的美感。',
              description_en: 'Recently, Artificial Intelligence (AI) has flourished in diverse areas. In the era of AI, our concept is to create an AI system that showcases its perception, then we reveal the its primality and ingenuity in the computing process by installation art. We built the convolutional neural network (ConvNet, or CNN), which is a state-of-art AI model, and specializes in visual recognition and image generation. First, we designed and trained ConvNets that can analyze images and transform their local perception layer-by-layer to the corresponding Chinese pictograms. Then, a set of installation art pieces that transforms the digital structure of CNN to an analog representation is constructed to visualize the algorithmic and structural details of ConvNets, which emphasizes neural activations and model weights. Unlike most existing AI artworks created to demonstrate the power of AI, or to show the reflection on the influence of AI to human society, we expect this work would help people have a better understanding of the inside architecture of the modern AI system, and appreciate the beauty of its complexity.',
              authors: [
                
              ],
              authors_en: [
                {
                  name: 'Chen-Hua Lu',
                  major: 'Department of Computer Science',
                  school: 'National Tsing Hua University',
                },
                {
                  name: 'Po-Yao Wu',
                  major: 'International Intercollegiate MS Program',
                  school: 'National Tsing Hua University',
                },
                {
                  name: 'Che-Rung Lee',
                  major: 'Department of Computer Science',
                  school: 'National Tsing Hua University',
                },
                {
                  name: 'Su-Chu Hsu',
                  major: 'College of Arts',
                  school: 'National Tsing Hua University',
                },
              ],
              pic: [
                require('../../assets/KT14/ming/ming_01.jpg'),
                require('../../assets/KT14/ming/ming_02.jpg'),
                require('../../assets/KT14/ming/ming_03.jpg'),
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'

</style>