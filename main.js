document.addEventListener("DOMContentLoaded", () => {
    let numOfPpl = document.getElementById("numOfPpl");
    const container = document.getElementById("container");
    let calculateSheet = document.getElementById("calculateSheet");
  
    // 入力イベントリスナーを追加
    numOfPpl.addEventListener("input", () => {
      let numberOfSheets = parseInt(numOfPpl.value) || 0; // 入力値を数値に変換。無効な入力は0とする。
  
      // 現在のcontainer内の子要素数を取得
      let currentSheets = container.children.length;
  
      // 必要な数の要素を追加する
      if (numberOfSheets > currentSheets) {
        // 足りない数だけ複製を追加
        for (let i = 0; i < numberOfSheets - currentSheets; i++) {
          const clonedElement = calculateSheet.cloneNode(true); // テンプレートを複製
          container.appendChild(clonedElement); // containerに追加
  
          // 複製した要素に対して個別にイベントを設定
          setupInputEvent(clonedElement, ".hourlyWageInput");
          setupInputEvent(clonedElement, ".totalWorkingHoursInput");
          setupInputEvent(clonedElement, ".holidayDutyInput");
        }
      } else if (numberOfSheets < currentSheets) {
        // 多すぎる場合は余分な要素を削除
        for (let i = 0; i < currentSheets - numberOfSheets; i++) {
          container.removeChild(container.lastChild); // 最後の子要素を削除
        }
      }
    });
  
    // 初期のイベント設定
    setupInputEvent(null, "#hourlyWage");
    setupInputEvent(null, "#totalWorkingHours");
    setupInputEvent(null, "#holidayDuty");
  });
  
  // 入力イベント設定の共通処理
  function setupInputEvent(parentElement, selector) {
    let element = parentElement ? parentElement.querySelector(selector) : document.querySelector(selector);
    if (element) {
      element.addEventListener("input", (event) => {
        let inputValue = event.target.value; // イベントターゲットの値を変数に代入
        console.log(inputValue); // コンソールにその値を表示
      });
    }
  }
  