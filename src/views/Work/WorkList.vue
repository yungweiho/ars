<template lang="pug">
.wl
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true")
    .wlTitle {{ work_list_title }}
  .wlBlock(v-if="$route.params.workid == 1")
    .wlTabBlock group
      .wlTab(v-for="item in KT_gorup_list" :key="item.title" :class="{select: $route.query.group === item.title}" @click="$router.push({query: {group: item.title}})") {{ item.title }}
  .wlCardBlock
    .wlCard(v-for="item in show_works" :style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .wlCardTextBlock
        .wlCardTitle {{ item.title }}
        .wlCardSubtitle 
        
</template>

<script>
let code = `
  let clr_circle=['#7400B8', '#6930C3', '#5E60CE', '#5390D9', '#4EA8DE', '#48BFE3', '#56CFE1', '#64DFDF', '#72EFDD', '#80FFDB'];
let circle_light_list=[];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 0.01);
	// frameRate(1)
}

function draw() {
	// let bgR = random(0,0.5)
	background(0, 0.01)
	translate(width/2, height/2)
	cle()
	if(mouseX>width/2-(windowWidth+1000)/2 && mouseX<width/2 + (windowWidth+1000)/2 && mouseY > height/2-(windowWidth+1000)/2 && mouseY < height/2 + (windowWidth+1000)/2) {
		for(var i = 0; i < 2*PI; i += 0.005*PI) {
			line(mouseX - width/2, mouseY - height/2, (windowWidth+1000)/2*cos(i), (windowWidth+1000)/2*sin(i))
			}
	} else {
		for(var i = 0; i < 2*PI; i += 0.005*PI) {
			line(mouseX - width/2, mouseY - height/2, (windowWidth+1000)/2*cos(i), (windowWidth+1000)/2*sin(i))
		}
	}

}

function cle() {
	// blendMode(MULTIPLY);
	colorMode(HSB)
	strokeWeight(1)
	noFill()
	stroke(frameCount/10%360, 80, 150)
	ellipse(0,0,windowWidth+1000)
}


`
export default {
  data() {
    return {
      p5_file: code,
      workList: [
        {
          id: 1,
          project: '李國鼎（K.T.）科技與人文藝術創意競賽',
          subtitle: '第15屆得獎作品',
          pic: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          group: [
            {
              title: '數位遊戲組',
              works: [
                {
                  title: 'SOMNUS',
                  description: '《SOMNUS》為一款第一人稱射擊遊戲。本作在第一人稱射擊遊戲的基礎上，融合了動作遊戲常有的完美迴避，讓玩家在享受FPS的射擊感的同時，還能一併體驗到動作遊戲的高靈活度。玩家將扮演本作主角榮格，一名藉由潛入他人的意識，獵殺由潛意識幻化成的夢魘，來治療各種不治之症的密醫；這次，他將潛入一名因故而成為植物人的歌劇女星的意識中，透過找尋到的線索，一步步拼湊出使她甦醒的關鍵，與深藏在背後的陰謀…',
                  pic: [
                    require('../../assets/KT15/game/somnus/somnus_01.png'),
                    require('../../assets/KT15/game/somnus/somnus_02.png'),
                    require('../../assets/KT15/game/somnus/somnus_03.png'),
                    require('../../assets/KT15/game/somnus/somnus_04.png'),
                  ]
                },
                {
                  title: 'VUVU',
                  description: '本遊戲是一款基於台灣特有種野生動物為主的探究式生物數位遊戲教具,遊戲內容主要圍繞在以雲豹居住的高海拔闊葉林、黑熊居住的中海拔鞍馬山霧林和石虎居住的低海拔稻 田為故事背景，學生可以在行動裝置上透過該生態模擬數位遊戲式教具去模擬台灣山區的生態,從而觀察環境與動物之間的相互影響關係,希望透過遊戲模擬情景的方式達到在科學課程中有效的 融入探究式學習,利用從「學習既有知識」為主的學習方式,轉為強調實作尋求解答「創造知識」的體驗學習。本生物課程數位遊戲教具系統不僅能提升學習能量、學習動機與互動性也能更加多元。',
                  pic: [
                    require('../../assets/KT15/game/vuvu/vuvu_01.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_02.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_03.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_04.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_05.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_06.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_07.png'),
                    require('../../assets/KT15/game/vuvu/vuvu_08.png'),
                  ]
                },
                {
                  title: '收妖',
                  description: '收妖是一款以八家將為主題的遊戲，與新加坡南洋理工學院的學生們體驗與不同國家的人一起製作一個專案。當時我們採用台灣的民俗文化為題材，透過製作八家將的專案，來讓南洋理工學院的學生們瞭解到台灣的文化。我們角色的臉譜、服飾，是參照"全臺白龍庵如良應興堂"，再擊倒Boss後會撥放的動畫也是參照"全臺白龍庵如良應興堂"夜巡時要把妖怪收服時的動作，以及最重要的我們的關卡也是設定在五福大帝:劉部宣靈公誕辰繞境日巡的前晚，家將會在宣靈公出巡前衛主神開路，掃除妖孽的環節。我們希望讓更多人透過遊戲來了解台灣的家將文化。',
                  pic: [
                    require('../../assets/KT15/game/shoyau/shoyau_01.png'),
                    require('../../assets/KT15/game/shoyau/shoyau_02.png'),
                    require('../../assets/KT15/game/shoyau/shoyau_03.png'),
                    require('../../assets/KT15/game/shoyau/shoyau_04.png'),
                    require('../../assets/KT15/game/shoyau/shoyau_05.png'),
                  ]
                },
                {
                  title: '俠盜異聞錄',
                  description: '市面上許多遊戲的設計目的都是以遊戲性為主，因此也造成許多玩家在遊戲中不知道遊戲的目的及意義。因此我們希望製作一款有故事主線，並結合遊戲性的設計。藉由本科系熟悉的3D建模、程式設計等等，來完成這項作品。對於大家而言，羅賓漢作為英國民間傳說中的英雄人物，本身就有許多故事及迷團，豐富的素材加上人物本身的魅力，這也是我們小組選擇以羅賓漢作為遊戲主題的緣由。',
                  pic: [
                    require('../../assets/KT15/game/shadau/shadau_01.png'),
                    require('../../assets/KT15/game/shadau/shadau_02.png'),
                    require('../../assets/KT15/game/shadau/shadau_03.png'),
                    require('../../assets/KT15/game/shadau/shadau_04.png'),
                  ]
                },
                {
                  title: '格羅佛 Grover',
                  description: '隨著巨雷劃破雲霄，守護部族的大燈籠損毀，黑暗力量再次壟罩整座森林，為了拯救僅存的同伴，主角-格羅佛必須收集那些被黑暗驅散的光明之蟲，並將牠們歸還到守護部族與森林的燈籠中，因此他踏上抵抗黑暗的旅程。故事內容講述個體無法改變大環境，但當單一的信念匯集起來，能成為力量去影響它。可能沒辦法完全改善狀況，但也許能避免最糟的情況發生。以平台遊戲凸顯畫面的精緻，為了不受限於環境設備，我們同時將遊戲放上了PC平台與安卓平台，讓玩家隨時隨地都能體驗我們的遊戲。',
                  pic: [
                    require('../../assets/KT15/game/grover/grover_01.png'),
                    require('../../assets/KT15/game/grover/grover_02.png'),
                    require('../../assets/KT15/game/grover/grover_03.png'),
                    require('../../assets/KT15/game/grover/grover_04.png'),
                  ]
                },
                {
                  title: '迷謎餌 MELEER',
                  description: '《迷謎餌MELEER》是一款讓好友們開心遊玩的多人連線派對遊戲，翻轉以往的殺敵數獲勝規則，加入了緊張刺激的”丟迷謎”替死鬼要素！與其打死不如壓垮對手，即使對方擁有金幣數量優勢，你也可以藉由此玩法反敗為勝，同樣的，即便金幣全失， ”迷謎化” 也能讓你狂暴起來！帶你扳回一成，獲得更多金幣！！',
                  pic: [
                    require('../../assets/KT15/game/meleer/meleer_01.png'),
                    require('../../assets/KT15/game/meleer/meleer_02.png'),
                    require('../../assets/KT15/game/meleer/meleer_03.png'),
                    require('../../assets/KT15/game/meleer/meleer_04.png'),
                  ]
                },
                {
                  title: '開拓者 Kyronus',
                  description: '《Kyronus 開拓者》是一款可以與真實世界產生連結的手機經營遊戲，透過在真實世界中移動來收集資源，建造各式各樣建築物，並且復刻出現實生活所存在的建築、特色地景等，在遊戲世界中打造屬於你自己獨一無二的星球！我們希望以遊戲化的方式，利用手機遊戲作為媒介，透過 GPS 定位功能，作為玩家開拓台灣的起點，並鼓勵玩家親自實地到訪文化建築或地景。透過遊玩的過程，讓更多玩家能看見更多台灣特色建築，再從建築背景衍伸帶出台灣文化價值。',
                  pic: [
                    require('../../assets/KT15/game/kyronus/kyronus_01.png'),
                    require('../../assets/KT15/game/kyronus/kyronus_02.png'),
                    require('../../assets/KT15/game/kyronus/kyronus_03.png'),
                    require('../../assets/KT15/game/kyronus/kyronus_04.png'),
                  ]
                },
                {
                  title: '嗚啊嗚啊 WOO',
                  description: '《嗚啊嗚啊》為一款雙人對戰的角色扮演(Role Playing Game)遊戲，以動物求偶為主要特色，玩家將扮演會變身的小精靈，變身成為不同動物，進入動物的世界，感受他們獨有的有趣求偶行為。雙方共用一個螢幕展示遊戲畫面，各自拿取遊戲手把進行，透過身體動作操控動物們做出求偶的行為，此種特別的體驗，能激發人們對動物的想像，能比閱讀視聽獲得更深刻的動物知識。我們希望藉由此有趣且獨特的主題，讓大家在玩樂的同時輕鬆學習動物相關知識，達到寓教於樂的效果，遊戲使用強烈的影像吸引關注，以鮮明夢幻的色彩與圓潤的線條作為風格基礎，將動物風格設定為老少咸宜的可愛風，搭配誇張的Ｑ彈角色動畫，塑造出強烈的視覺對比感。',
                  pic: [
                    require('../../assets/KT15/game/woo/woo_01.png'),
                    require('../../assets/KT15/game/woo/woo_02.png'),
                    require('../../assets/KT15/game/woo/woo_03.png'),
                    require('../../assets/KT15/game/woo/woo_04.png'),
                  ]
                },
                {
                  title: '蓋亞 GAIA',
                  description: '動作遊戲一定要拼命的無雙嗎？我們想用非主流的玩法，玩家需思考和地圖的關係，讓玩家體驗不同的打王經驗。不像主流遊戲有複雜的系統、技能，簡化遊戲系統，將一切的操作包圍在射箭瞬間移動，達到遊玩體驗。想起一次在關渡平原，見田園中到處攀著紅色的螺，那是外來種生物「福壽螺」，這些外來種侵蝕了原生種的居住地，滿地可見的外來種（大花咸豐草等），決定以我們『台灣』為背景，遊戲當中的BOSS設計成台灣未來種，讓玩家遊玩遊戲的時候，體驗擊殺怪物的快感外，也透過遊戲去思考環境和自身。在《Gaia》中我們表達出得生態議題是在外來物種怪物侵入的背景之下，環境迫害，玩家需擊敗這些怪物，拯救這個區域。',
                  pic: [
                    require('../../assets/KT15/game/gaia/gaia_01.png'),
                    require('../../assets/KT15/game/gaia/gaia_02.png'),
                    require('../../assets/KT15/game/gaia/gaia_03.png'),
                    require('../../assets/KT15/game/gaia/gaia_04.png'),
                  ]
                },
                {
                  title: '蔓不生長 Antivine',
                  description: '自古以來流傳了一種植物病，染上後曬到陽光，身上的植物會急遽生長，把生物變成植物，主角的妹妹就是染上了這種植物病，傳說只要能穿越遺跡抵達大陸的另外一端，就可以找到治癒的方法，於是，哥哥便帶上妹妹踏上了冒險之旅...關卡利用不同的季節來表示玩家已經經過許久的冒險，並且在途中遇到不同的體驗讓玩家置身其中，感受裡面的故事。經過重重的解謎難關，了解故事的始末，並且推動哥哥與妹妹未來的命運。',
                  pic: [
                    require('../../assets/KT15/game/antivine/antivine_01.png'),
                    require('../../assets/KT15/game/antivine/antivine_02.png'),
                    require('../../assets/KT15/game/antivine/antivine_03.png'),
                    require('../../assets/KT15/game/antivine/antivine_04.png'),
                  ]
                },
              ]
            },
            {
              title: '數位動畫組',
              works: [
                {
                  title: 'SOMNUS',
                  description: '《SOMNUS》為一款第一人稱射擊遊戲。本作在第一人稱射擊遊戲的基礎上，融合了動作遊戲常有的完美迴避，讓玩家在享受FPS的射擊感的同時，還能一併體驗到動作遊戲的高靈活度。玩家將扮演本作主角榮格，一名藉由潛入他人的意識，獵殺由潛意識幻化成的夢魘，來治療各種不治之症的密醫；這次，他將潛入一名因故而成為植物人的歌劇女星的意識中，透過找尋到的線索，一步步拼湊出使她甦醒的關鍵，與深藏在背後的陰謀…',
                  pic: [
                    require('../../assets/KT15/game/somnus/somnus_01.png'),
                    require('../../assets/KT15/game/somnus/somnus_02.png'),
                    require('../../assets/KT15/game/somnus/somnus_03.png'),
                    require('../../assets/KT15/game/somnus/somnus_04.png'),
                  ]
                }
              ]
            },
            {
              title: '互動科技藝術組',
              works: [
                {
                  title: '尪',
                  description: '尪在閩南話意指偶像、戲偶，也有神仙之意，發想來自陣頭的七爺八爺，此裝置為賽博龐克風格的七爺戲偶重製，試圖將對科技未來的想像融合台灣傳統廟會文化。如遊行的七爺一般此裝置手臂手掌皆可動卻不依靠電力，而是採用液壓系統驅動結構運作，使用者可配戴此裝置並在裝置體內進行操作。本作品採用複合媒材，技術方面使用雷射切割以及3D列印。',
                  pic: [
                    require('../../assets/KT15/techart/eun/eun_01.png'),
                    require('../../assets/KT15/techart/eun/eun_02.png'),
                    require('../../assets/KT15/techart/eun/eun_03.png'),
                    require('../../assets/KT15/techart/eun/eun_04.png'),
                  ]
                },
                {
                  title: '身體的延伸 Extension of Body',
                  description: 'Extension of Body是一個結合跳舞，並且可以即時互動的作品。這個作品再探討如何將身體延伸,利用感測器,偵測舞者各項動作的數據,並將這些動作數據透過程式及時轉化為影像,再將影像投影到紗幕上,配合舞者的現場演出。並且因為紗幕的特性,觀者得以在看到影像的同時,看到舞者的表演,使其超越身體的維度，讓舞蹈與影像的融合度可以更高，藉此加強舞蹈表現的力道。雖然是以與舞蹈結合為出發點，但一般觀眾也可以利用移動或簡單的肢體動作(如張開雙手)，輕鬆與投影內容互動。技術上利用realsence深度攝影機感測舞者的動作範圍與位置，和mpu6050陀螺儀讀取舞者的動作與旋轉，再將感測到的數值轉換為畫面。',
                  pic: [
                    require('../../assets/KT15/techart/body/body_01.png'),
                    require('../../assets/KT15/techart/body/body_02.png'),
                    require('../../assets/KT15/techart/body/body_03.png'),
                    require('../../assets/KT15/techart/body/body_04.png'),
                  ]
                },
                {
                  title: '花繡',
                  description: '「找回刺繡時手心的溫度，女性溫柔的力量」刺繡是一項流傳千年、如作畫一般細膩的技藝，在過去的歷史中更是家庭婦女不可或缺的一項技能，回顧過往的傳統家庭，婦女們無不拾起繡針，一針一線為家庭拈針織起衣裳，使身上的衣著不僅變得堅固亮麗，更留存了手繡的溫度。然而近代由於電繡的出現，傳統刺繡逐漸被機器所取代，這項技能也從家事轉變為傳統技藝。因此希望能夠藉由浮空投影的繡架裝置，更結合了傳統閨房的窗花設計，使互動過程有更多層次的體驗。讓觀眾能夠體驗穿針繡花的過程之外，更能發現刺繡有趣的地方。',
                  pic: [
                    require('../../assets/KT15/techart/flower/flower_01.png'),
                    require('../../assets/KT15/techart/flower/flower_02.png'),
                    require('../../assets/KT15/techart/flower/flower_03.png'),
                    require('../../assets/KT15/techart/flower/flower_04.png'),
                  ]
                },
                {
                  title: '魚之呼吸',
                  description: '海洋是人類仰賴最豐富的資源之一，因此保護海洋資源，是我們重要的任務。隨著時代的進步，垃圾也隨之增加，漸漸的大量垃圾排放到海洋，使其逐漸被汙染。本作品表達出，於慢慢地被人類的垃圾侵蝕，演化成不同的物種，提醒人類要珍惜海洋資源，注重環境保育。媒材採用Arduino程式、可口可樂鋁罐及回收物。將鋁罐串成魚的造型，以回收物做支撐，使用程式驅動作品，希望能介媒材來表現主題，使大家關懷海洋。作品取名「魚之呼吸」，呼吸是生物維持生命的必要元素，水管讓可樂流經魚的身軀，象徵傳輸養分，即是呼吸。程式不斷循環，可樂持續寄附在魚身，也是代表不斷前進的時間帶著工業、科技等人類文明逐漸影響海洋環境。',
                  pic: [
                    require('../../assets/KT15/techart/fish/fish_01.png'),
                    require('../../assets/KT15/techart/fish/fish_02.png'),
                    require('../../assets/KT15/techart/fish/fish_03.png'),
                  ]
                },
                {
                  title: '虛擬天氣視覺系統',
                  description: '該作品『虛擬天氣視覺系統』透過虛擬實境，結合天氣資訊與資料視覺化的技法，運動電腦模擬畫面及虛擬實境，讓體驗者體驗位於在各地的城市天氣，並揭露體驗者與虛擬世界的互動過程，藉此對體驗者來說，在虛擬世界的圖像此時此刻所見的天氣就是那個城市的天氣狀況，讓他們相信眼前所見的現實說服體驗者們。',
                  pic: [
                    require('../../assets/KT15/techart/weather/weather_01.png'),
                    require('../../assets/KT15/techart/weather/weather_02.png'),
                    require('../../assets/KT15/techart/weather/weather_03.png'),
                  ]
                },
                {
                  title: '微觀世界',
                  description: '人類創造的那些繁華看似五彩繽紛，實則縹緲虛無，自認為是世界的主宰，而遺忘了世界的本質。「水」孕育一切生命，低調而神聖，人將其操控，將其佔有，彷彿掌控了一切，實際上為人所操控的僅僅是這個世界的一小部分，而在這一小部分的積累到達環境物理極限之後，還原的過程甚至比當初更加繁複，更加勞民傷財，甚至會造成對人及環境雙方的危害。透過 Processing 編成軟體接收鍵盤的 MIDI 訊號，再藉由 Firmata 通道傳送至 Arduino，接著在 Arduino 內編入程式控制電磁閥達到控制媒材進出的目的。',
                  pic: [
                    require('../../assets/KT15/techart/tiny/tiny_01.png'),
                    require('../../assets/KT15/techart/tiny/tiny_02.png'),
                    require('../../assets/KT15/techart/tiny/tiny_03.png'),
                  ]
                },
              ]
            },
          ]
        }
      ]
    }
  },
  mounted() {

  },
  computed: {
    // KT的組別列表
    KT_gorup_list() {
      var group_list;
      group_list = this.workList.find((item) => Number(item.id) === Number(this.$route.params.workid));
      return group_list.group;
    },
    // 標題
    work_list_title() {
      var group_list;
      group_list = this.workList.find((item) => Number(item.id) === Number(this.$route.params.workid));
      return group_list.project;
    },
    // 作品
    show_works() {
      if(this.$route.query.group != undefined) {
        var work_list;
        work_list = this.KT_gorup_list.find((item) => item.title === this.$route.query.group);
        return work_list.works
      } else {
        return null
      }
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.wl
  iframe
    width: 100%
    height: 15vw
    position: absolute
    // z-index: 100
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.wl
  width: 100%
  +flexcolumn
  align-items: center
  .wlBanner
    width: 100%
    height: 15vw
    // background: url('https://i.pinimg.com/564x/b1/ad/70/b1ad7006e0e22b65f764c546955d78e5.jpg')
    background-color: rgba(black, 0.8)
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    .wlTitle
      position: absolute
      bottom: 20px
      left: 25px
      font-size: 30px
      font-weight: bold
      color: white
      letter-spacing: 1.5px
  .wlBlock
    width: 100%
    +flexcolumn
    align-items: center
    .wlTabBlock
      width: 60vw
      border-bottom: solid 1px black
      font-size: 20px
      font-weight: bold
      +flexrow
      justify-content: space-around
      padding: 10px
      margin-top: 20px
      max-width: 1300px
      letter-spacing: 1.5px
      .wlTab
        font-size: 20px
        margin-right: 20px
        letter-spacing: 1.5px
        cursor: pointer
        font-weight: normal
        &:before
          position: absolute
          content: ''
          width: 15px
          height: 5px
          left: -20px
          top: 10px
          background-color: black
          display: none
        &.select
          &:before
            display: block
  .wlCardBlock
    width: 61vw
    +flexrow
    // +bb
    flex-wrap: wrap
    box-sizing: border-box
    padding: 20px 0
    justify-content: space-between
    .wlCard
      width: 30%
      height: 12vw
      margin-bottom: 1vw
      max-width: 390.38px
      max-height: 255.99px
      cursor: pointer
      border-radius: 6px
      transition: 0.5s
      &:hover
        .wlCardTextBlock
          .wlCardSubtitle
            opacity: 1
            transform: translateY(0%)
            transition: 0.5s
      .wlCardTextBlock
        width: 100%
        height: 100%
        background-color: rgba(#333, 0.5)
        box-sizing: border-box
        padding: 25% 0
        transition: 0.5s
        border-radius: 6px
        .wlCardTitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
        .wlCardSubtitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
          margin-top: 5%
          opacity: 0
          transform: translateY(50%)
          transition: 0.5s



</style>