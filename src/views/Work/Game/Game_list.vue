<template lang="pug">
.ge
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle {{ game_data.title }}
  .wlCardBlock
    router-link.wlCard(v-for="(item, i) in game_data.works" :to="'/Digital_Game/work/' + Math.ceil(i+1)" :style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .wlCardTextBlock
        .wlCardTitle {{ item.title }}
        .wlCardSubtitle
  router-view(:game_data="game_data")
</template>

<script>
let code = `
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	frameRate(5)
}

function draw() {
	background(0);
	// blendMode(SCREEN)
	// noStroke()
	translate(width/2,height/2)
	// var ratio = map(frameCount%50, 0, 49, 0, 1)
	// var clr1 = color('#fff')
	// var clr2 = color('#a6a6a6')
	// var mix_clr = lerpColor(clr1, clr2, ratio)

	fill(color('#707070'))
	// ellipse(random(-5,width+5), random(-5,height+5), random(0,100));
	for(var i=0;i<300;i++){
		let ang = i/10+ frameCount/50
		let r = i + noise(i/10)*map(mouseX,0,width,0,100)
		rotate(frameCount/1000)
		// rect(cos(ang)*r,sin(ang)*r,50)
		rect(cos(ang)*r,sin(ang)*r, 20, 20)
		fill(color('#707070'))
		textSize(20)
		// text("HELLO"[i%5],cos(ang)*r,sin(ang)*r)
	}
}

`
export default {
  data() {
    return {
      p5_file: code,
      game_data: {
        title: '數位遊戲組',
        works: [
          {
            title: 'SOMNUS',
            description: '《SOMNUS》為一款第一人稱射擊遊戲。本作在第一人稱射擊遊戲的基礎上，融合了動作遊戲常有的完美迴避，讓玩家在享受FPS的射擊感的同時，還能一併體驗到動作遊戲的高靈活度。玩家將扮演本作主角榮格，一名藉由潛入他人的意識，獵殺由潛意識幻化成的夢魘，來治療各種不治之症的密醫；這次，他將潛入一名因故而成為植物人的歌劇女星的意識中，透過找尋到的線索，一步步拼湊出使她甦醒的關鍵，與深藏在背後的陰謀…',
            description_en: `“SOMNUS,” a first-person shooting game, combines with perfect avoidance usually
              seen in action games, allowing players to not only enjoy the sense of first person
              shooting but also experience the high flexibility of the action game at the same time.
              Players will play the leading role of Jung, a quacksalver treating all kinds of incurable
              diseases via killing nightmares transformed from subconsciousness by slipping into
              people’s consciousness. At this time, he will slip into the consciousness of a female
              opera singer, who became a vegetable for some reason, to step by step piece up the
              key to her recovery and the conspiracy deeply hidden behind via the found clues.`,
            authors: [
              {
                name: '林易辰',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '林煒翔',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '林正耘',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '郭秉澄',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '王淯傑',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '徐昊',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
            ],
            authors_en: [
              {
                name: 'Yi-Chen Lin',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Yi-Chen Lin',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Cheng-Yun Lin',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Ping-Cheng Kuo',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Yu-Chieh Wang',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Hao Hsu',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
            ],
            pic: [
              require('../../../assets/KT15/game/somnus/somnus_01.png'),
              require('../../../assets/KT15/game/somnus/somnus_02.png'),
              require('../../../assets/KT15/game/somnus/somnus_03.png'),
              require('../../../assets/KT15/game/somnus/somnus_04.png'),
            ]
          },
          {
            title: 'VUVU',
            description: '本遊戲是一款基於台灣特有種野生動物為主的探究式生物數位遊戲教具,遊戲內容主要圍繞在以雲豹居住的高海拔闊葉林、黑熊居住的中海拔鞍馬山霧林和石虎居住的低海拔稻 田為故事背景，學生可以在行動裝置上透過該生態模擬數位遊戲式教具去模擬台灣山區的生態,從而觀察環境與動物之間的相互影響關係,希望透過遊戲模擬情景的方式達到在科學課程中有效的 融入探究式學習,利用從「學習既有知識」為主的學習方式,轉為強調實作尋求解答「創造知識」的體驗學習。本生物課程數位遊戲教具系統不僅能提升學習能量、學習動機與互動性也能更加多元。',
            description_en: 'Mainly based on Taiwanese distinctive wild animals, this game is a digital teaching aid for exploring creatures. The story of this game happens in a high-altitude broad-leaved forest where clouded leopards live in, a middle-altitude cloud forest in Anma Mountain where black bears live in, and a low-altitude rice field where leopard cats live in. Via the game-like digital teaching aid for ecological simulation on the mobile device, students can simulate the ecology of the mountain areas in Taiwan, observing the interactive relationship between the environment and animals. By simulating the circumstances in the game, explorative learning is expected to be effectively integrated into scientific courses, transforming the main learning method of “learning the existing knowledge” into the immersive learning of “creating knowledge” that emphasizes on practice and solution finding. This game-like digital teaching aid system for biology courses will increase learning capability, motive as well as diversity.',
            authors: [
              {
                name: '卓宜萱',
                school: '國立雲林科技大學',
              },
              {
                name: '楊俊輝',
                school: '國立雲林科技大學',
              },
              {
                name: '簡邱偉',
                school: '國立交通大學',
                major: '多媒體工程系'
              },
              {
                name: '許品宜',
                school: '國立雲林科技大學',
              },
              {
                name: '陳沛頤',
                school: '國立雲林科技大學',
              },
            ],
            authors_en: [
              {
                name: 'Yi-Hsuan Cho',
                school: 'National Yunlin University of Science and Technology',
              },
              {
                name: 'Chun-Hui Yang',
                school: 'National Yunlin University of Science and Technology',
              },
              {
                name: 'Chiu-Wei Chien',
                major: 'Institute of Multimedia Engineering',
                school: 'National Chiao Tung University',
              },
              {
                name: 'Pin-Yi Hsu',
                school: 'National Yunlin University of Science and Technology',
              },
              {
                name: 'Pei-Yi Chen',
                school: 'National Yunlin University of Science and Technology',
              },
            ],
            pic: [
              require('../../../assets/KT15/game/vuvu/vuvu_01.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_02.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_03.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_04.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_05.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_06.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_07.png'),
              require('../../../assets/KT15/game/vuvu/vuvu_08.png'),
            ]
          },
          {
            title: '俠盜異聞錄 | Robinhood',
            description: '市面上許多遊戲的設計目的都是以遊戲性為主，因此也造成許多玩家在遊戲中不知道遊戲的目的及意義。因此我們希望製作一款有故事主線，並結合遊戲性的設計。藉由本科系熟悉的3D建模、程式設計等等，來完成這項作品。對於大家而言，羅賓漢作為英國民間傳說中的英雄人物，本身就有許多故事及迷團，豐富的素材加上人物本身的魅力，這也是我們小組選擇以羅賓漢作為遊戲主題的緣由。',
            description_en: `In the market, many games are designed mainly for gameplay, which hereby makes
              many players unable to realize the games’ purposes and meanings. Consequently,
              we expected to design a game with a story main line and gameplay. This creation
              was completed with 3D modeling and programming that our department students
              are familiar with. As a hero in the British popular legend, Robin Hood has many
              stories and mysteries. His rich materials and charisma are exactly the reasons why
              our team chose Robin Hood as the theme of the game.`,
            authors: [
              {
                name: '陳韋蓁',
                school: '實踐大學',
                major: '資訊模擬與設計系'
              },
              {
                name: '林硯樵',
                school: '實踐大學',
                major: '資訊模擬與設計系'
              },
              {
                name: '張贏方',
                school: '實踐大學',
                major: '資訊模擬與設計系'
              },
            ],
            authors_en: [
              {
                name: 'Wei-Chen Chen',
                school: 'Shih Chien University',
                major: 'Department of Computer Simulation and Design'
              },
              {
                name: 'Yen-Chiao Lin',
                school: 'Shih Chien University',
                major: 'Department of Computer Simulation and Design'
              },
              {
                name: 'Ying-Fang Chang',
                school: 'Shih Chien University',
                major: 'Department of Computer Simulation and Design'
              },
            ],
            pic: [
              require('../../../assets/KT15/game/shadau/shadau_01.png'),
              require('../../../assets/KT15/game/shadau/shadau_02.png'),
              require('../../../assets/KT15/game/shadau/shadau_03.png'),
              require('../../../assets/KT15/game/shadau/shadau_04.png'),
            ]
          },
          {
            title: '迷謎餌 | MELEER',
            description: '《迷謎餌MELEER》是一款讓好友們開心遊玩的多人連線派對遊戲，翻轉以往的殺敵數獲勝規則，加入了緊張刺激的”丟迷謎”替死鬼要素！與其打死不如壓垮對手，即使對方擁有金幣數量優勢，你也可以藉由此玩法反敗為勝，同樣的，即便金幣全失， ”迷謎化” 也能讓你狂暴起來！帶你扳回一成，獲得更多金幣！！',
            description_en: `“MELEER” is a multiplayer online party game that gathers friends and have fun
              together, overturning the rule of winning by the number of killed enemies. Instead,
              an exciting element of “throwing MELEE” scapegoat is added! It would rather
              override than kill the opponents. By this way, even if opponents have the advantage of
              more gold coins, you can still turn defeat into victory. Similarly, even if all the gold
              coins are lost, “turning into MELEE” can still make you manic again, turning the tide
              and gaining more gold coins!`,
            authors: [
              {
                name: '陳建廷',
                school: '國立臺中科技大學',
                major: '多媒體設計系'
              },
              {
                name: '陳敬旻',
                school: '國立臺中科技大學',
                major: '多媒體設計系'
              },
              {
                name: '簡盟峻',
                school: '國立臺中科技大學',
                major: '多媒體設計系'
              },
              {
                name: '王湘君',
                school: '國立臺中科技大學',
                major: '多媒體設計系'
              },
              {
                name: '李姗蓉',
                school: '國立臺中科技大學',
                major: '多媒體設計系'
              },
            ],
            authors_en: [
              {
                name: 'Chien-Ting Chen',
                school: 'National Taichung University of Science and Technology',
                major: 'Department of Multimedia Design'
              },
              {
                name: 'Ching-Min Chen',
                school: 'National Taichung University of Science and Technology',
                major: 'Department of Multimedia Design'
              },
              {
                name: 'Meng-Chun Chien',
                school: 'National Taichung University of Science and Technology',
                major: 'Department of Multimedia Design'
              },
              {
                name: 'Hsiang-Chun Wang',
                school: 'National Taichung University of Science and Technology',
                major: 'Department of Multimedia Design'
              },
              {
                name: 'Shan-Jung Li',
                school: 'National Taichung University of Science and Technology',
                major: 'Department of Multimedia Design'
              },
            ],
            pic: [
              require('../../../assets/KT15/game/meleer/meleer_01.png'),
              require('../../../assets/KT15/game/meleer/meleer_02.png'),
              require('../../../assets/KT15/game/meleer/meleer_03.png'),
              require('../../../assets/KT15/game/meleer/meleer_04.png'),
            ]
          },
          {
            title: '蔓不生長 | Antivine',
            description: '自古以來流傳了一種植物病，染上後曬到陽光，身上的植物會急遽生長，把生物變成植物，主角的妹妹就是染上了這種植物病，傳說只要能穿越遺跡抵達大陸的另外一端，就可以找到治癒的方法，於是，哥哥便帶上妹妹踏上了冒險之旅...關卡利用不同的季節來表示玩家已經經過許久的冒險，並且在途中遇到不同的體驗讓玩家置身其中，感受裡面的故事。經過重重的解謎難關，了解故事的始末，並且推動哥哥與妹妹未來的命運。',
            description_en: `A kind of plant disease has been spreading since ancient times. With the disease, the
              plant on the creature will rapidly grow after basking in the sun, turning creatures
              into plants. The leading role’s younger sister caught the plant disease. It is said that a
              cure can be found only if one passes through the historical remains to the other side
              of the land. As a result, the brother took his younger sister to a journey of adventure.
              The different seasons throughout the levels means that players have experienced
              many adventures. Players feel the stories by immersing themselves in different
              things occurring on the way. After experiencing difficult puzzles one by one and
              understanding the whole story, the brother and his younger sister’s fate in the future
              will be determined.`,
            authors: [
              {
                name: '張凱閩',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '許惇盛',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '鍾孟達',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '陳哲暄',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '郭益愷',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '吳佳惠',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
              {
                name: '鄧依庭',
                school: '南臺科技大學',
                major: '多媒體與電腦娛樂科學系'
              },
            ],
            authors_en: [
              {
                name: 'Kai-Min Chang',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Tun-Sheng Hsu',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Meng-Ta Chung',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Che-Hsuan Chen',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Yi-Kai Kuo',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Chia-Hui Wu',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
              {
                name: 'Yi-Ting Teng',
                school: 'Southern Taiwan University of Technology',
                major: 'Department of Multimedia and Entertainment Science'
              },
            ],
            pic: [
              require('../../../assets/KT15/game/antivine/antivine_01.png'),
              require('../../../assets/KT15/game/antivine/antivine_02.png'),
              require('../../../assets/KT15/game/antivine/antivine_03.png'),
              require('../../../assets/KT15/game/antivine/antivine_04.png'),
            ]
          },
        ]
      }
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.ge
  iframe
    width: 100%
    height: 15vw
    position: absolute
    // z-index: 100
    +phone
      height: 100px
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.ge
  width: 100%
  +flexcolumn
  align-items: center
  padding: 0 0 200px 0
  .wlBanner
    width: 100%
    height: 15vw
    // background: url('https://i.pinimg.com/564x/b1/ad/70/b1ad7006e0e22b65f764c546955d78e5.jpg')
    background-color: rgba(black, 0.8)
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    +phone
      height: 100px
    .wlTitle
      position: absolute
      bottom: 20px
      left: 25px
      font-size: 30px
      font-weight: bold
      color: white
      letter-spacing: 1.5px
      text-shadow: 1px 1px 3px rgba(#333, 0.5)
    width: 100%
  .wlCardBlock
    width: 61vw
    +flexrow
    // +bb
    flex-wrap: wrap
    box-sizing: border-box
    padding: 20px 0
    justify-content: space-between
    +smallcom
      width: 81vw
    +pad
      width: 91vw
    .wlCard
      width: 30%
      height: 12vw
      margin-bottom: 1vw
      max-width: 390.38px
      max-height: 255.99px
      cursor: pointer
      border-radius: 6px
      transition: 0.5s
      +smallcom
        height: 15vw
      +pad
        width: 48%
        height: 25vw
        margin-bottom: 1.5vw
      +phone
        width: 100%
        height: 50vw
        margin-bottom: 15px

      &:hover
        .wlCardTextBlock
          .wlCardSubtitle
            opacity: 1
            transform: translateY(0%)
            transition: 0.5s
      &:last-child:nth-child(3n-1)
        margin-right: 35%
        +phone
          margin-right: 0
        
        
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