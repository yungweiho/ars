<template lang="pug">
.work
  .workBlock
    .workNameBlock  
      .line_top
      .workName {{ $route.params.workname }}
      .line_top
    .workSlideContainer
      transition(name="fade" mode="out-in")
        .workSlideBlock(v-for="(item, i) in work_item.pic.slice(p, p+1)" :key="p"  :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .workSlidePrev(@click="p === 0? p = work_item.pic.length-1 : p--")
        .line1
        .line2
      .workSlideNext(@click="p === work_item.pic.length-1? p = 0: p++")
        .line3
        .line4
    .workSlideOtherPicBlock
      .workSlideOtherPic(v-for="(item, i) in work_item.pic" :key="i" @click="p = i" :class="{select: p === i}" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .workTextBlock
      .workText {{ work_item.description }}
      .workText.en(v-if="work_item.description_en") {{ work_item.description_en }}
    .workAuthorBlock(v-for="au in work_item.authors")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.school") {{ au.school }}
      .workAuthorSchool(v-if="au.major") {{ au.major }}
    br
    .workAuthorBlock(v-if="work_item.authors_en" v-for="au in work_item.authors_en")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.major") \ {{ au.major }}
      .workAuthorSchool(v-if="au.school") \ {{ au.school }}
</template>

<script>
export default {
  data() {
    return {
      p: 0,
      work_list: 
        {
          id: 1,
          project: 'K. T. Creativity Award',
          subtitle: 'K.T.15',
          pic: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          group: [
            {
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
                    require('../../assets/KT15/game/somnus/somnus_01.png'),
                    require('../../assets/KT15/game/somnus/somnus_02.png'),
                    require('../../assets/KT15/game/somnus/somnus_03.png'),
                    require('../../assets/KT15/game/somnus/somnus_04.png'),
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
                    require('../../assets/KT15/game/shadau/shadau_01.png'),
                    require('../../assets/KT15/game/shadau/shadau_02.png'),
                    require('../../assets/KT15/game/shadau/shadau_03.png'),
                    require('../../assets/KT15/game/shadau/shadau_04.png'),
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
                    require('../../assets/KT15/game/meleer/meleer_01.png'),
                    require('../../assets/KT15/game/meleer/meleer_02.png'),
                    require('../../assets/KT15/game/meleer/meleer_03.png'),
                    require('../../assets/KT15/game/meleer/meleer_04.png'),
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
                  title: '化羽 | The Empress',
                  description: '隨著民主潮流的推波，女權運動近年來蓬勃發展，全球各地女性自主意識提升，許多女性權益看似逐漸改善，但即便是在二十一世紀今日，仍有許多國家及地區的傳統習俗或宗教文化，對女性平權的議題設下重重枷鎖，甚至視為異端禁止討論參與。藉由本次的動畫短片創作「化羽」，希望透過故事中父權至上的封建社會背景，傳達出女性自主意識的覺醒，期盼觀眾能瞭解爭取自由與權益的女性們，我們應給更多的尊重同理與包容。在製作及畫面技術上，小組三人發揮長才，使用PS、AI等繪圖軟體設計出人物以及場景；也使用了Cilp來繪製出逐格動畫，將所有繪製好的場景、角色、動態逐格結合進AE，使用合成及特效來呈現出完整的作品。',
                  description_en: `Following the trend of democracy, feminist movement flourished in recent years. All over the world, women’s awareness of autonomy has risen, and many women’s rights also seemed to have gradually improved. However, even today of the 21st century, the issues of women's equality are still chained by traditional customs or religious cultures in many regions and countries, and even been regarded as heterodox and banned on discussion and participation. By this short animation “The Empress,” the awakening of women’s awareness of autonomy is conveyed via the feudal society background of the patriarchalism reigning supreme in the story, expecting that the audience can understand the women striving for freedom and rights and that we should provide more respect, empathy and tolerance. On the production and graphic technology, our three team members used specialized drawing software, such as Photoshop and Illustrator, to design roles and scenes. Clip Studio Paint was also used to produce frame-by-frame animations, combining with the drawn scenes, roles and motions into After Effects frame by frame. The completed creation was presented by synthetization and special effects.`,
                  authors: [
                    {
                      name: '吳盈潔',
                      school: '樹德科技大學',
                      major: '動畫與遊戲設計系'
                    },
                    {
                      name: '張敬恩',
                      school: '樹德科技大學',
                      major: '動畫與遊戲設計系'
                    },
                    {
                      name: '柯雅琦',
                      school: '樹德科技大學',
                      major: '動畫與遊戲設計系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Ying-Chieh Wu',
                      school: 'Shu-Te University',
                      major: 'Department of Animation and Game Design'
                    },
                    {
                      name: 'Ching-En Chang',
                      school: 'Shu-Te University',
                      major: 'Department of Animation and Game Design'
                    },
                    {
                      name: 'Ya-Chi Ko',
                      school: 'Shu-Te University',
                      major: 'Department of Animation and Game Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/hua/hua_01.png'),
                    require('../../assets/KT15/animate/hua/hua_02.png'),
                    require('../../assets/KT15/animate/hua/hua_03.png'),
                    require('../../assets/KT15/animate/hua/hua_04.png'),
                    require('../../assets/KT15/animate/hua/hua_05.png'),
                    require('../../assets/KT15/animate/hua/hua_06.png'),
                  ]
                },
                {
                  title: '沉沒 | Sinking',
                  description: '故事描述一名女高中生被班上的同學利用、冷落的日常生活。在這樣的生活狀況之下主角逐漸感到絕望，並因壓力提升而開始產生了與深海有關的幻象。',
                  description_en: `The story describes a high school girl’s everyday life, being used and cold-shouldered by her classmates. Under such living conditions, the leading role feels desperate bit by bit, and due to increased pressure, starts to feel an illusion about deep seas.`,
                  authors: [
                    {
                      name: '羅巧涵',
                      school: '台南應用科技大學',
                      major: '多媒體動畫系'
                    },
                    {
                      name: '余聿平',
                      school: '台南應用科技大學',
                      major: '多媒體動畫系'
                    },
                    {
                      name: '陳玟憶',
                      school: '台南應用科技大學',
                      major: '多媒體動畫系'
                    },
                    {
                      name: '陳依君',
                      school: '台南應用科技大學',
                      major: '多媒體動畫系'
                    },
                    {
                      name: '冀心嵐',
                      school: '台南應用科技大學',
                      major: '多媒體動畫系'
                    },
                    {
                      name: '黃阡莉',
                      school: '台南應用科技大學',
                      major: '多媒體動畫系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Chiao-Han Lo',
                      school: 'Tainan University of Technology',
                      major: 'Department of Multimedia and Animation'
                    },
                    {
                      name: 'Yu-Ping Yu',
                      school: 'Tainan University of Technology',
                      major: 'Department of Multimedia and Animation'
                    },
                    {
                      name: 'Wen-Yi Chen',
                      school: 'Tainan University of Technology',
                      major: 'Department of Multimedia and Animation'
                    },
                    {
                      name: 'Yi-Chun Chen',
                      school: 'Tainan University of Technology',
                      major: 'Department of Multimedia and Animation'
                    },
                    {
                      name: 'Hsin-Lan Chi',
                      school: 'Tainan University of Technology',
                      major: 'Department of Multimedia and Animation'
                    },
                    {
                      name: 'Chien-Li Huang',
                      school: 'Tainan University of Technology',
                      major: 'Department of Multimedia and Animation'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/chen/chen_01.png'),
                    require('../../assets/KT15/animate/chen/chen_02.png'),
                    require('../../assets/KT15/animate/chen/chen_03.png'),
                  ]
                },
                {
                  title: '妳只在乎妳在乎的 | Mother Figure',
                  description: '本作以導演好友的生命經驗， 發現他對於母愛總是充滿渴望，可是當他真正面對母親時，卻又無法拉近彼此的距離，隨著時光飛逝， 兩者都錯過挽回的機會， 留下無奈。透過回憶了解母親從未給予小孩真正想要的、運用孩童視角劃分現實與過去的時間軸與情緒氛圍， 將理性和感性連同環境比例區隔開、把影片溫度與童趣感用手繪筆觸加上紙質疊加出來、盡可能將手繪動畫質感還原到電腦動畫媒材上。',
                  description_en: `This animation is based on the director’s life experience. He found that he always eagers for mother’s love, but when really facing his mother, he failed to bring them closer. While time passed, they both missed the opportunity to retrieve the situation, only leaving helplessness. By recalling that mother never gave her child what he really wanted, a child’s angle of view was adopted to differentiate the timeline and emotional atmosphere of the present and the past, dividing rationality, sensibility and environment proportion. The animation sensibility and childlike sense were overlaid by hand-drawing strokes and paper textures; the textures of hand-drawing animation were tried to be recovered to the materials of computer animation.`,
                  authors: [
                    {
                      name: '張䕒澤',
                      school: '國立臺南藝術大學',
                      major: '動畫藝術與影像美學研究所'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Chia-Tse Chang',
                      school: 'Tainan National University of the Arts',
                      major: 'Institute of Animation and Film Art'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/mother/mother_01.png'),
                    require('../../assets/KT15/animate/mother/mother_02.png'),
                    require('../../assets/KT15/animate/mother/mother_03.png'),
                    require('../../assets/KT15/animate/mother/mother_04.png'),
                    require('../../assets/KT15/animate/mother/mother_05.png'),
                  ]
                },
                {
                  title: '苒冉 | TURN BACK THE CLOCK',
                  description: '西元2048年，在經歷過第三次世界大戰和人類對地球造成不可逆汙染的未來，風雲變色，失序的世界中使得大部分土地失去生機，徒留受到核汙染基因變異的生物和極少數散落各地的倖存者人類。身為其中一人的主角獨自生活在末日後的世界，從小就對機械有興趣，擅長東拼西湊組裝各種零件的他，在那裡為了實現自己的心願四處奔走搜集零件，完成一件可以讓意識回到過去的機器，接著由過去記憶中的場景交代主角的身世背景，並藉此響應環保議題。動畫為3D與2D混合使用的風格，場景為3D建模而角色則為2D繪製，藉由風格差異區隔兩者，突顯出主角與末日後的世界格格不入。',
                  description_en: `In 2048, the future experiencing the third world war and the irreversible pollution on the earth made by humans, everything has changed. In this disorderly world, most lands lost their vitality, only leaving the creatures with genetic mutation from nuclear pollution and very few human survivors scattered in different places. The leading role, one of those humans, living alone in the world after the doom, has always been interested in machinery since he was young. He is good at assembling different kinds of parts. In order to make his dream come true, he tries hard to gather parts from different places to create a machine which can bring consciousness back to the past. And then, the leading role’s family background is disclosed from the scenes in the past memories, and thereby responding to environmental protection issues. In the animation, combined with 3D and 2D styles, the scenes are modeled by 3D, and the roles are drawn by 2D. Differentiating two settings by style, it more clearly shows that the leading role is incompatible with the world after the doom.`,
                  authors: [
                    {
                      name: '王安懿',
                      school: '國立臺北教育大學',
                      major: '藝術與造形設計學系'
                    },
                    {
                      name: '王琬琇',
                      school: '國立臺北教育大學',
                      major: '藝術與造形設計學系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'An-Yi Wang',
                      school: 'National Taipei University of Education',
                      major: 'Department of Arts and Design'
                    },
                    {
                      name: 'Wan-Hsiu Wang',
                      school: 'National Taipei University of Education',
                      major: 'Department of Arts and Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/zan/zan_01.png'),
                    require('../../assets/KT15/animate/zan/zan_02.png'),
                    require('../../assets/KT15/animate/zan/zan_03.png'),
                    require('../../assets/KT15/animate/zan/zan_04.png'),
                  ]
                },
                {
                  title: '浮標 | Buoy',
                  description: '浮標，是一種簡易的標地物，隨著浮動，它所框出的不確定範圍被人們作為一種象徵性的空間代表，這讓我們對空間有了更多的解讀性。此故事中將以浮標的概念來揭示生活中的人與人之間的空間關係。主角是一名游泳選手，故事描述著主角在與人相處時，透過分類、預想他人行為，使自己能夠解讀社會上所發生的事情。但在片段的事件中卻產生了框架時而明確時而模糊的狀態，最後主角在理解框架的形式後，奮力地跳入泳池中…。以「水」為意象，象徵人與人相處因立場不同而產生時而明確，時而模糊的矛盾現象，我們使用3D的技術呈現現實與抽象的空間關係，更輔以2D的特色，帶出作品的溫度與深度，來呈現「框架」的核心概念！',
                  description_en: `Buoy is a kind of simple target; while floating, its framed uncertain area is regarded as a kind of symbolic space representative. It makes us interpret a space more differently. In this story, the concept of buoy is used to reveal the space relationships between people in life. The leading role is a swimming player. The story tells that when the leading role gets along with others, she anticipates people’s behaviors by categorization, which makes her be able to interpret what happens in the society. Nevertheless, in the fragments of events, the frames fall into the status sometimes clear and sometimes blurred. In the end, the leading role jumps hard into the swimming pool after understanding the form of frames… As the imagery, “water” symbolizes the contradictory phenomenon that people get along with each other by sometimes clear and sometimes blurred relationships due to different standpoints. We use 3D technology, assisted with 2D features, to present the space relationship between reality and abstraction, bringing out the creation’s sensibility and deepness, to show the core concept of “frame”!`,
                  authors: [
                    {
                      name: '沈莉臻',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                    {
                      name: '張家寧',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                    {
                      name: '黃芊華',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Li-Chen Shen',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                    {
                      name: 'Chia-Ning Chang',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                    {
                      name: 'Chien-Hua Huang',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/phoo/phoo_01.png'),
                    require('../../assets/KT15/animate/phoo/phoo_02.png'),
                    require('../../assets/KT15/animate/phoo/phoo_03.png'),
                    require('../../assets/KT15/animate/phoo/phoo_04.png'),
                  ]
                },
                {
                  title: '森生 | Born for forest',
                  description: '發想與動機:PM2.5是一種空氣污染，而當人們處在霧霾環境中呼吸,那些過小的顆粒無法被口罩抑制或是人體產生的防禦機制給阻擋在外,他將導致呼吸困難和增加肺部疾病的風險。主旨:人們的呼吸是需要森林予以的淨化,眾多樹苗才能成林,可綠植卻隨著發展的過程而漸失,在這個世代裡,如何取得平衡並使人反思人與自然之間的關係是件相當重要的議題。理念:影片中透過實體化霧霾以有趣的互動呈現出主角、植物及霧霾三方,相互制衡的關係,來讓人省思和探討自然與發展之間可否取得平衡,並讓每個人透過小小的舉動來改善及預防空氣汙染,愛護森林及減少砍后,讓我們在未來能有個可以好好深呼吸的地方。',
                  description_en: `Motive: PM2.5 is a kind of air pollution. When we breathe in the hazy environment with small particles unable to be blocked out by masks or human defense mechanisms, our risks of breathing difficulties and lung diseases will increase. Purpose: Our breathing needs to be purified by forests. A forest can only be formed by numerous saplings, but on the contrary planting gradually disappears in the process of development. In this generation, how to reach the balance and make people think over the relationship between humans and nature is a very important issue. Idea: In the film, hazes are materialized, and the mutually balanced relationships among the leading role, plants and hazes are presented by interesting interactions, so as to make people reflect over and discuss whether nature and development can achieve their balance. Small actions are also taken by each one to improve and prevent air pollution, protect forests and decrease logging, leaving a place we can well breathe deeply in the future.`,
                  authors: [
                    {
                      name: '彭俞瑄',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系動畫組'
                    },
                    {
                      name: '翁嘉妤',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系動畫組'
                    },
                    {
                      name: '梁雅鈞',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系動畫組'
                    },
                    {
                      name: '江家均',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系動畫組'
                    },
                    {
                      name: '王馨慧',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系動畫組'
                    },
                    {
                      name: '簡瑜君',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系動畫組'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Yu-Hsuan Peng',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Animation Division, Department of Visual Communication Design'
                    },
                    {
                      name: 'Chia-Yu Weng',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Animation Division, Department of Visual Communication Design'
                    },
                    {
                      name: 'Ya-Chun Liang',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Animation Division, Department of Visual Communication Design'
                    },
                    {
                      name: 'Chia-Chun Chiang',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Animation Division, Department of Visual Communication Design'
                    },
                    {
                      name: 'Hsing-Hui Wang',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Animation Division, Department of Visual Communication Design'
                    },
                    {
                      name: 'Yu-Chun Chien',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Animation Division, Department of Visual Communication Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/san/san_01.png'),
                    require('../../assets/KT15/animate/san/san_02.png'),
                    require('../../assets/KT15/animate/san/san_03.png'),
                    require('../../assets/KT15/animate/san/san_04.png'),
                  ]
                },
                {
                  title: '綻放之種 | Blüte',
                  description: '綻放之種(2020) 以女性的角度出發，記錄少女在初次經歷戀愛的過程中，愛情悄然進入心房的心境描寫。以植物作為女性符號象征的複合式媒材，種子代表生命的誕生與再生，植物透過種子把生命延續到未來，愛情的旅程也是如此。將愛情最原始的形態視覺化，試圖尋找一種情感關係中的心靈寄託，脫離東方社會傳統思潮的束縛，從種子蛻變為小芽茁壯成長。每個女人都有愛與被愛的權利，請為自己勇於追逐愛情感到驕傲吧！',
                  description_en: 'Blüte (2020) explores the perspective of a woman as she experiences the first tinge of love as it colors her teenage heart for the first time. Plants have been chosen the composite medium of choice to symbolize feminity. Seeds represents birth and rebirth. Plants extend life through seeds into the future, and so does the journey of love. Visualize the most primitive form of love, and try to find the spiritual core of a relationship. Break through traditional Eastern notions of love, and let the seeds grow valiantly into a budding plant. Every woman has the right to love and be loved, so please be proud of your courage to chase after love!',
                  authors: [
                    {
                      name: '潘妍希',
                      school: '國立臺灣藝術大學',
                    },
                    {
                      name: '劉靜怡',
                      school: '國立臺灣藝術大學',
                    },
                  ],
                  authors_en: [
                    {
                      name: 'YAN-SI PAN',
                      school: 'National Taiwan University of Arts',
                    },
                    {
                      name: 'JING-YI LIU',
                      school: 'National Taiwan University of Arts',
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/zhan/zhan_01.png'),
                    require('../../assets/KT15/animate/zhan/zhan_02.png'),
                    require('../../assets/KT15/animate/zhan/zhan_03.png'),
                    require('../../assets/KT15/animate/zhan/zhan_04.png'),
                  ]
                },
                {
                  title: '餘溫 | Everlasting Touch',
                  description: '「大體老師」，是指捐贈自己的遺體，供醫學院學生在解剖課上使用的亡者，是學生的第一位手術患者兼重要的老師。藉由作品中大體老師和學生間的特殊感情，破除大眾對大體解剖課的偏見和不安，傳達遺體捐贈的真正意義。',
                  description_en: `“Cadaver,” the dead human body donated by oneself, providing medical students for anatomy classes, is students’ first patient undergoing surgery and important teacher. By the special emotions between cadaver and students, people’s prejudice and unease towards anatomy classes are eliminated, and the true meaning of body donation is conveyed.`,
                  authors: [
                    {
                      name: '楊皓茨',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                    {
                      name: '張沄寧',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                    {
                      name: '紀宥亘',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                    {
                      name: '邱郁茜',
                      school: '國立臺灣藝術大學',
                      major: '多媒體動畫藝術學系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Hao-Tzu Yang',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                    {
                      name: 'Yun-Ning Chang',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                    {
                      name: 'Yu-Huan Chi',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                    {
                      name: 'Yu-Chien Chiu',
                      school: 'National Taiwan University of Arts',
                      major: 'Department of Multimedia and Animation Arts'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/yui/yui_01.png'),
                    require('../../assets/KT15/animate/yui/yui_02.png'),
                    require('../../assets/KT15/animate/yui/yui_03.png'),
                    require('../../assets/KT15/animate/yui/yui_04.png'),
                    require('../../assets/KT15/animate/yui/yui_05.png'),
                  ]
                },
                {
                  title: '願 | Hope',
                  description: '天燈自古以來有著傳遞訊息、祈福許願的作用，在台灣並列為「北天燈，南蜂炮，東寒單」三大民俗之一的美名，成為百年歷史的在地習俗。而這些天燈都承載著我們親手寫下的祝福與希望，作為心靈上的寄託，向天祈禱著希望心中所想的願望能成真。主要在敘述在每個人心中都曾有過可能是天馬行空又或是不可能實現的願望，正因為如此，讓我們對於未來的目標更加明確，在過程中可能失敗，卻還是勇往直前，『願』你我都能朝著自己的願望前進。我們也希望透過本片讓世界各地的人了解天燈除了能許下人們心中的願望，並且能知道放天燈的傳統文化，傳承了中華文化裡美好的習俗。',
                  description_en: `Sky lantern, used for passing messages, praying for blessings and making wishes    since ancient times, has a good name of top three folk activities in Taiwan “sky lanterns in the North; beehive fireworks in the South; and Handan in the East.” It became a local custom lasting one hundred years. These sky lanterns carry our blessings and wishes written with our own hands, as spiritual sustenance, praying to God for dreams coming true. It mainly describes that everyone had either imaginative or unachievable wishes in mind. Just because of that, our goals in the future will be more specific. It may fail in the process, but we still advance bravely towards our own wishes. Through this film, we hope that the people around the world can understand that people can make wishes via sky lanterns, and understand the traditional culture of releasing sky lanterns, passing on this wonderful custom in the Chinese culture.`,
                  authors: [
                    {
                      name: '楊宛蓁',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系'
                    },
                    {
                      name: '邱昱絜',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系'
                    },
                    {
                      name: '尹新瑋',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系'
                    },
                    {
                      name: '劉炳成',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系'
                    },
                    {
                      name: '蔡卉婷',
                      school: '南臺科技大學',
                      major: '視覺傳達設計系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Wan-Chen Yang',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Department of Visual Communication Design'
                    },
                    {
                      name: 'Yu-Chieh Chiu',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Department of Visual Communication Design'
                    },
                    {
                      name: 'Hsin-Wei Yin',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Department of Visual Communication Design'
                    },
                    {
                      name: 'Ping-Cheng Liu',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Department of Visual Communication Design'
                    },
                    {
                      name: 'Hui-Ting Tsai',
                      school: 'Southern Taiwan University of Science and Technology',
                      major: 'Department of Visual Communication Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/animate/yuang/yuang_01.png'),
                    require('../../assets/KT15/animate/yuang/yuang_02.png'),
                    require('../../assets/KT15/animate/yuang/yuang_03.png'),
                    require('../../assets/KT15/animate/yuang/yuang_04.png'),
                  ]
                },
              ]
            },
            {
              title: '互動科技藝術組',
              works: [
                {
                  title: '尪 | GOD',
                  description: '尪在閩南話意指偶像、戲偶，也有神仙之意，發想來自陣頭的七爺八爺，此裝置為賽博龐克風格的七爺戲偶重製，試圖將對科技未來的想像融合台灣傳統廟會文化。如遊行的七爺一般此裝置手臂手掌皆可動卻不依靠電力，而是採用液壓系統驅動結構運作，使用者可配戴此裝置並在裝置體內進行操作。本作品採用複合媒材，技術方面使用雷射切割以及3D列印。',
                  description_en: `In Southern Min, Ang means idol, puppet or celestial, originating from the Seventh Lord and the Eighth Lord in the Parade Formation. This installation is a reproduction of the Seventh Lord puppet with cyberpunk style, trying to combine the picture of future technology with the traditional temple fair culture in Taiwan. As the Seventh Lord in the parade, all the arms and palms of this installation can move without electricity. A hydraulic system is used to operate the structures. Users can wear this installation and operate it inside. This creation is made by mixed media with technologies such as laser cutting and 3D printing.`,
                  authors: [
                    {
                      name: '游清心',
                      school: '實踐大學',
                      major: '媒體傳達設計學系'
                    }
                  ],
                  authors_en: [
                    {
                      name: 'Ching-Hsin Yu',
                      school: 'Shih Chien University',
                      major: 'Department of Communications Design'
                    }
                  ],
                  pic: [
                    require('../../assets/KT15/techart/eun/eun_01.png'),
                    require('../../assets/KT15/techart/eun/eun_02.png'),
                    require('../../assets/KT15/techart/eun/eun_03.png'),
                    require('../../assets/KT15/techart/eun/eun_04.png'),
                  ]
                },
                {
                  title: '身體的延伸 | Extension of Body',
                  description: 'Extension of Body是一個結合跳舞，並且可以即時互動的作品。這個作品再探討如何將身體延伸,利用感測器,偵測舞者各項動作的數據,並將這些動作數據透過程式及時轉化為影像,再將影像投影到紗幕上,配合舞者的現場演出。並且因為紗幕的特性,觀者得以在看到影像的同時,看到舞者的表演,使其超越身體的維度，讓舞蹈與影像的融合度可以更高，藉此加強舞蹈表現的力道。雖然是以與舞蹈結合為出發點，但一般觀眾也可以利用移動或簡單的肢體動作(如張開雙手)，輕鬆與投影內容互動。技術上利用realsence深度攝影機感測舞者的動作範圍與位置，和mpu6050陀螺儀讀取舞者的動作與旋轉，再將感測到的數值轉換為畫面。',
                  description_en: `Extension of Body is a creation that combines with dance and real-time interaction. With sensors, it detects dancers’ motion data while stretching their bodies, immediately transforms these data into images by programs, and then projects images onto veils, with dancers’ performance on the spot. Because of the characteristic of veils, the audience can watch dancers’ performance with the sight of images. It allows dancers to reach beyond where their bodies could, making the dance and images blend better and strengthening the power of the dance. Although it is on the basis of dance, the audience can still simply move their limbs (e.g. opening arms) to interact with the projected images. Technically, the depth and tracking camera RealSense is used to sense dancers’ motion ranges and positions, and the gyroscope MPU-6050 is used to retrieve dancers’ motions and spins. The sensed values will be transformed into images.`,
                  authors: [
                    {
                      name: '柯柏羽',
                      school: '實踐大學',
                      major: '媒體傳達設計學系'
                    }
                  ],
                  authors_en: [
                    {
                      name: 'Po-Yu Ko',
                      school: 'Shih Chien University',
                      major: 'Department of Communications Design'
                    }
                  ],
                  pic: [
                    require('../../assets/KT15/techart/body/body_01.png'),
                    require('../../assets/KT15/techart/body/body_02.png'),
                    require('../../assets/KT15/techart/body/body_03.png'),
                    require('../../assets/KT15/techart/body/body_04.png'),
                  ]
                },
                {
                  title: '花繡 | Hua-Shiou',
                  description: '「找回刺繡時手心的溫度，女性溫柔的力量」刺繡是一項流傳千年、如作畫一般細膩的技藝，在過去的歷史中更是家庭婦女不可或缺的一項技能，回顧過往的傳統家庭，婦女們無不拾起繡針，一針一線為家庭拈針織起衣裳，使身上的衣著不僅變得堅固亮麗，更留存了手繡的溫度。然而近代由於電繡的出現，傳統刺繡逐漸被機器所取代，這項技能也從家事轉變為傳統技藝。因此希望能夠藉由浮空投影的繡架裝置，更結合了傳統閨房的窗花設計，使互動過程有更多層次的體驗。讓觀眾能夠體驗穿針繡花的過程之外，更能發現刺繡有趣的地方。',
                  description_en: `“Retrieving the temperature in the palm while embroidering, female’s tender power.” Embroidery is a skill spreading through a thousand years as delicate as painting, which was an indispensable ability of housewives in history. Looking back at the traditional families in the past, women always knitted clothes needle by needle and thread by thread for their family members, which not only made clothes solider and prettier but also left the temperature of hand-embroidering. However, in modern times, the emergence of machine embroidery made traditional embroidery gradually be replaced by machines, and this ability also turned into traditional skill from housework. Therefore, via an embroidery hoop device projected in the air, combined with traditional room design of window paper-cuts, the audience is expected to experience more in the interactive process, not only experiencing the embroidering process with a needle but also discovering where embroidery is really interesting.`,
                  authors: [
                    {
                      name: '陳玟君',
                      school: '大同大學',
                      major: '媒體設計學系'
                    },
                    {
                      name: '郭家蓉',
                      school: '大同大學',
                      major: '媒體設計學系'
                    },
                    {
                      name: '陳稚涵',
                      school: '大同大學',
                      major: '媒體設計學系'
                    },
                    {
                      name: '陳品儒',
                      school: '大同大學',
                      major: '媒體設計學系'
                    },
                    {
                      name: '洪子晴',
                      school: '大同大學',
                      major: '媒體設計學系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Wen-Chun Chen',
                      school: 'Tatung University',
                      major: 'Department of Media Design'
                    },
                    {
                      name: 'Chia-Jung Kuo',
                      school: 'Tatung University',
                      major: 'Department of Media Design'
                    },
                    {
                      name: 'Chih-Han Chen',
                      school: 'Tatung University',
                      major: 'Department of Media Design'
                    },
                    {
                      name: 'Pin-Ju Chen',
                      school: 'Tatung University',
                      major: 'Department of Media Design'
                    },
                    {
                      name: 'Tzu-Ching Hung',
                      school: 'Tatung University',
                      major: 'Department of Media Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/techart/flower/flower_01.png'),
                    require('../../assets/KT15/techart/flower/flower_02.png'),
                    require('../../assets/KT15/techart/flower/flower_03.png'),
                    require('../../assets/KT15/techart/flower/flower_04.png'),
                  ]
                },
                {
                  title: '魚之呼吸 | The breath of the fish',
                  description: '海洋是人類仰賴最豐富的資源之一，因此保護海洋資源，是我們重要的任務。隨著時代的進步，垃圾也隨之增加，漸漸的大量垃圾排放到海洋，使其逐漸被汙染。本作品表達出，於慢慢地被人類的垃圾侵蝕，演化成不同的物種，提醒人類要珍惜海洋資源，注重環境保育。媒材採用Arduino程式、可口可樂鋁罐及回收物。將鋁罐串成魚的造型，以回收物做支撐，使用程式驅動作品，希望能介媒材來表現主題，使大家關懷海洋。作品取名「魚之呼吸」，呼吸是生物維持生命的必要元素，水管讓可樂流經魚的身軀，象徵傳輸養分，即是呼吸。程式不斷循環，可樂持續寄附在魚身，也是代表不斷前進的時間帶著工業、科技等人類文明逐漸影響海洋環境。',
                  description_en: `Arduino software, Coca-Cola aluminum cans and recycled materials are used as the media. Aluminum cans are strung as fish, supported by recycled materials and driven by software, expecting to make people care about the ocean through the theme presented by the media. The creation is titled “Fish’s Breathing.” Breathing is an essential element for creatures to maintain their lives. Water pipes allow Coke to flow through fish’s body, which symbolizes nutrition transportation, i.e. breathing. This creation conveys that fish have gradually been corroded by man-made trash, evolving into different species, which is to remind humans to cherish ocean resources and pay attention to environmental protection.`,
                  authors: [
                    {
                      name: '楊淳琹',
                      school: '國立臺北教育大學',
                      major: '藝術與造型設計學系'
                    },
                    {
                      name: '蘇湘婷',
                      school: '輔仁大學',
                      major: '中國文學系'
                    },
                    {
                      name: '蘇育琪',
                      school: '國立臺北教育大學',
                      major: '藝術與造型設計學系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Chun-Chin Yang',
                      school: 'National Taipei University of Education',
                      major: 'Department of Arts and Design'
                    },
                    {
                      name: 'Hsiang-Ting Su',
                      school: 'Fu Jen Catholic University',
                      major: 'Department of Chinese Literature'
                    },
                    {
                      name: 'Yu-Chi Su',
                      school: 'National Taipei University of Education',
                      major: 'Department of Arts and Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/techart/fish/fish_01.png'),
                    require('../../assets/KT15/techart/fish/fish_02.png'),
                    require('../../assets/KT15/techart/fish/fish_03.png'),
                  ]
                },
                {
                  title: '虛擬天氣視覺系統 | Virtual Weather Visual System',
                  description: '該作品『虛擬天氣視覺系統』透過虛擬實境，結合天氣資訊與資料視覺化的技法，運動電腦模擬畫面及虛擬實境，讓體驗者體驗位於在各地的城市天氣，並揭露體驗者與虛擬世界的互動過程，藉此對體驗者來說，在虛擬世界的圖像此時此刻所見的天氣就是那個城市的天氣狀況，讓他們相信眼前所見的現實說服體驗者們。',
                  description_en: `Via virtual reality, the creation “Virtual Weather Visual System" combines weather information and data visualization with computer simulated pictures and virtual reality, allowing the audience to experience the weather in local cities and disclose the interactive process between the audience and virtual world. To the audience, the weather seen at the moment in the virtual world is exactly the city’s weather condition. The reality seen before the eyes will well convince the audience.`,
                  authors: [
                    {
                      name: '吳侑勳',
                      school: '國立成功大學',
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Yu-Hsun Wu',
                      school: 'National Cheng Kung University',
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/techart/weather/weather_01.png'),
                    require('../../assets/KT15/techart/weather/weather_02.png'),
                    require('../../assets/KT15/techart/weather/weather_03.png'),
                  ]
                },
                {
                  title: '微觀世界 | The Micro World',
                  description: '人類創造的那些繁華看似五彩繽紛，實則縹緲虛無，自認為是世界的主宰，而遺忘了世界的本質。「水」孕育一切生命，低調而神聖，人將其操控，將其佔有，彷彿掌控了一切，實際上為人所操控的僅僅是這個世界的一小部分，而在這一小部分的積累到達環境物理極限之後，還原的過程甚至比當初更加繁複，更加勞民傷財，甚至會造成對人及環境雙方的危害。透過 Processing 編成軟體接收鍵盤的 MIDI 訊號，再藉由 Firmata 通道傳送至 Arduino，接著在 Arduino 內編入程式控制電磁閥達到控制媒材進出的目的。',
                  description_en: `The prosperity humans created seems to be colorful but actually empty. Humans consider ourselves the dominant of the world and forget the nature of the world. “Water” nourishes every life, which is low-keyed and holy. But humans manipulate and occupy it as if we have controlled everything. Actually, what is manipulated by humans is merely a small part of this world. After this small part accumulates and reaches the physical limit of the environment, the recovery process will be more complicated than that in the beginning. It will waste money and manpower and even endanger both humans and the environment. In this creation, keyboard MIDI signals are received from Processing and then sent to Arduino via Firmata channels; programs are also coded in Arduino to control solenoid valves so as to control the media’s passing in and out.`,
                  authors: [
                    {
                      name: '何晉倫',
                      school: '實踐大學',
                      major: '媒體傳達設計學系'
                    },
                  ],
                  authors_en: [
                    {
                      name: 'Chin-Lun Ho',
                      school: 'Shih Chien University',
                      major: 'Department of Communications Design'
                    },
                  ],
                  pic: [
                    require('../../assets/KT15/techart/tiny/tiny_01.png'),
                    require('../../assets/KT15/techart/tiny/tiny_02.png'),
                    require('../../assets/KT15/techart/tiny/tiny_03.png'),
                  ]
                },
              ]
            },
          ]
        },
      
    }
  },
  mounted() {
  
  },
  computed: {
    // work
    work_item() {
      var work_group;
      work_group = this.work_list.find((item) => Number(item.id) === Number(this.$route.params.workid));
      console.log(work_group);
      var work_list = [];
      var work;
      for (var i = 0; i < work_group.group.length; i++) {
        work = work_group.group[i].works.find((item) => item.title == this.$route.params.workname)
        if (work != undefined) {
          work_list.push(work)
        }
      }
      return work_list[0];
    },
    
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.work
  width: 100%
  +flexcolumn
  align-items: center
  .workBlock
    width: 70%
    margin-top: 50px
    +smallcom
      width: 80%
    +pad
      width: 90%
    +phone
      width: 95%
    +phone5
      width: 100%
.workNameBlock
  width: 100%
  +flexrow
  justify-content: center
  .workName
    font-size: 30px
    letter-spacing: 1.5px
    font-weight: bold
    text-align: center
    margin-bottom: 20px
    position: relative
    margin-left: 20px
    margin-right: 20px
  .line_top
    width: 100px
    height: 20px
    // background-color: black
    border-bottom: solid 1px black
    // margin-top: 10px
  
  
.workSlideContainer
  width: 100%
  position: relative

.workSlideBlock
  position: absolute
  width: 100%
  height: 40vw
  position: relative
  +smallcom
    height: 45vw
  +pad
    height: 50vw
  +phone
    height: 55vw
.workSlidePrev
  position: absolute
  top: 50%
  left: 2%
  cursor: pointer
  +phone
    left: 5%
  .line1
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(45deg)
    box-shadow: 1px 1px 6px 3px rgba(#333, 0.7)
  .line2
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(-45deg)
    margin-top: -8px
    box-shadow: -1px 3px 6px 3px rgba(#333, 0.7)
.workSlideNext
  position: absolute
  top: 50%
  right: 2%
  cursor: pointer
  +phone
    right: 5%
  .line3
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(-45deg)
    box-shadow: 1px 1px 6px 3px rgba(#333, 0.7)
  .line4
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(45deg)
    margin-top: -8px
    box-shadow: -1px 3px 6px 3px rgba(#333, 0.7)
.workSlideOtherPicBlock
  width: 100%
  +flexrow
  margin-top: 10px
  .workSlideOtherPic
    width: 12%
    height: 5.5vw
    margin-right: 10px
    cursor: pointer
    +smallcom
      height: 6vw
    +pad
      height: 7vw
    +phone
      height: 10vw
      width: 15%
    &.select
      border: solid 5px gray
.workTextBlock
  width: 100%
  margin-top: 30px
  margin-bottom: 30px
  border-bottom: solid 1px #555
  box-sizing: border-box
  padding: 0 0 20px 0
  +phone
    padding: 0 10px 20px 10px
  .workText
    font-size: 18px
    letter-spacing: 1.5px
    line-height: 35px
    margin-top: 20px
  .en
    letter-spacing: 1px
    text-align: justify
.workAuthorBlock
  width: 100%
  +flexrow
  margin-top: 10px
  // margin-bottom: 10px
  letter-spacing: 1.5px
  color: #555
  flex-wrap: wrap
  .workAuthorName
    font-size: 18px
  .workAuthorSchool
    font-size: 18px
    margin-left: 10px
    line-height: 30px
  

</style>