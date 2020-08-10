<template lang="pug">
.wl
</template>

<script>
export default {
  data() {
    return {
      workList: [
        {
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
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.wl


</style>