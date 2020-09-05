<template lang="pug">
.ai
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle Digital Animation
  .bread_block(v-if="$route.params.workid == undefined")
    router-link.bread(v-for="item in bread_data" :to="item.url" :class="{now: $route.path === item.url}") {{ item.title }}
  .progTitle(v-if="$route.params.workid == undefined") Artworks
  .wlCardBlock(v-if="$route.params.workid == undefined")
    router-link.wlCard(v-for="(item, i) in animate_data.works" :to="'/Digital_Animation/work/' + Math.ceil(i+1)" :style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .wlCardTextBlock
        .wlCardTitle {{ item.title }}
        .wlCardSubtitle
  router-view(:animate_data="animate_data")
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
      bread_data: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Bitter Spring and Fruity Fall Exhibition',
          url: '/Bitter_Spring_and_Fruity_Fall_Exhibition',
        },
        {
          title: 'Digital Animation',
          url: '/Digital_Animation',
        }
      ],
      p5_file: code,
      animate_data: {
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
              require('../../../assets/KT15/animate/hua/hua_01.jpg'),
              require('../../../assets/KT15/animate/hua/hua_02.jpg'),
              require('../../../assets/KT15/animate/hua/hua_03.jpg'),
              require('../../../assets/KT15/animate/hua/hua_04.jpg'),
              require('../../../assets/KT15/animate/hua/hua_05.jpg'),
              require('../../../assets/KT15/animate/hua/hua_06.jpg'),
            ],
            video: 'https://youtu.be/bddgV2_dNT0'
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
              require('../../../assets/KT15/animate/chen/chen_01.jpg'),
              require('../../../assets/KT15/animate/chen/chen_02.jpg'),
              require('../../../assets/KT15/animate/chen/chen_03.jpg'),
            ],
            video: 'https://youtu.be/2HweJrVDY1g'
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
              require('../../../assets/KT15/animate/mother/mother_01.jpg'),
              require('../../../assets/KT15/animate/mother/mother_02.jpg'),
              require('../../../assets/KT15/animate/mother/mother_03.jpg'),
              require('../../../assets/KT15/animate/mother/mother_04.jpg'),
              require('../../../assets/KT15/animate/mother/mother_05.jpg'),
            ],
            video: 'https://youtu.be/our28vFKUdc'
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
              require('../../../assets/KT15/animate/zan/zan_01.jpg'),
              require('../../../assets/KT15/animate/zan/zan_02.jpg'),
              require('../../../assets/KT15/animate/zan/zan_03.jpg'),
              require('../../../assets/KT15/animate/zan/zan_04.jpg'),
            ],
            video: 'https://youtu.be/5oVyjf82LAI'
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
              require('../../../assets/KT15/animate/phoo/phoo_01.jpg'),
              require('../../../assets/KT15/animate/phoo/phoo_02.jpg'),
              require('../../../assets/KT15/animate/phoo/phoo_03.jpg'),
              require('../../../assets/KT15/animate/phoo/phoo_04.jpg'),
            ],
            video: 'https://youtu.be/Pu1JpaIx8z8'
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
              require('../../../assets/KT15/animate/san/san_01.jpg'),
              require('../../../assets/KT15/animate/san/san_02.jpg'),
              require('../../../assets/KT15/animate/san/san_03.jpg'),
              require('../../../assets/KT15/animate/san/san_04.jpg'),
            ],
            video: 'https://youtu.be/K1wUJg0tPjI'
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
              require('../../../assets/KT15/animate/zhan/zhan_01.jpg'),
              require('../../../assets/KT15/animate/zhan/zhan_02.jpg'),
              require('../../../assets/KT15/animate/zhan/zhan_03.jpg'),
              require('../../../assets/KT15/animate/zhan/zhan_04.jpg'),
            ],
            video: 'https://youtu.be/BmMeOp1ORdI'
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
              require('../../../assets/KT15/animate/yui/yui_01.jpg'),
              require('../../../assets/KT15/animate/yui/yui_02.jpg'),
              require('../../../assets/KT15/animate/yui/yui_03.jpg'),
              require('../../../assets/KT15/animate/yui/yui_04.jpg'),
              require('../../../assets/KT15/animate/yui/yui_05.jpg'),
            ],
            video: 'https://youtu.be/iyAKZhcvWCY'
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
              require('../../../assets/KT15/animate/yuang/yuang_01.jpg'),
              require('../../../assets/KT15/animate/yuang/yuang_02.jpg'),
              require('../../../assets/KT15/animate/yuang/yuang_03.jpg'),
              require('../../../assets/KT15/animate/yuang/yuang_04.jpg'),
            ],
            video: 'https://youtu.be/jYXFGzPUeYI'
          },
        ]
      }
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.ai
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
.ai
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

  .wlCardBlock
    width: 61vw
    +flexrow
    // +bb
    flex-wrap: wrap
    box-sizing: border-box
    padding: 20px 0
    justify-content: space-between
    margin-top: 30px
    max-width: 1186px

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
        box-sizing: border-box
        padding: 25% 0
        transition: 0.5s
        border-radius: 6px
        .wlCardTitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          background-color: rgba(#333, 0.5)
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
.progTitle
  width: 61vw
  text-align: center
  font-size: 20px
  font-weight: bold
  letter-spacing: 1px
  // border-bottom: solid 1px black
  margin-top: 30px
  +smallcom
    width: 81vw
  +pad
    width: 91vw
.bread_block
  width: 61vw
  background-color: rgba(#333, 0.2)
  margin-top: 10px
  padding: 5px
  +flexrow
  flex-wrap: wrap
  +smallcom
    width: 81vw
  +pad
    width: 91vw
  +phone
    margin-top: 30px
  .bread
    font-size: 18px
    margin-right: 10px
    letter-spacing: 1px
    color: #555
    &:last-child
      &:after
        content: ''
    &:after
      content: '>'
      margin-left: 10px
    &.now
      color: black
</style>