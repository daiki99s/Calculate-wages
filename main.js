document.addEventListener("DOMContentLoaded", () => {
    const numOfPpl = document.getElementById("numOfPpl");
    const container = document.getElementById("container");
    const calculateSheet = document.getElementById("calculateSheet");

    // 入力イベントリスナーを追加
    numOfPpl.addEventListener("input", () => {
        const numberOfSheets = parseInt(numOfPpl.value) || 0; // 入力値を数値に変換。無効な入力は0とする。
        const currentSheets = container.children.length;

        // 必要な数の要素を追加または削除
        if (numberOfSheets > currentSheets) {
            addSheets(numberOfSheets - currentSheets);
        } else if (numberOfSheets < currentSheets) {
            removeSheets(currentSheets - numberOfSheets);
        }
    });

    // 初期のイベント設定
    setupInputEvent(null);

    function addSheets(count) {
        for (let i = 0; i < count; i++) {
            const clonedElement = calculateSheet.cloneNode(true); // テンプレートを複製
            clonedElement.id = `calculateSheet_${container.children.length}`; // 一意のIDを設定
            container.appendChild(clonedElement); // containerに追加
            setupInputEvent(clonedElement); // 複製した要素に対してイベント設定
        }
    }

    function removeSheets(count) {
        for (let i = 0; i < count; i++) {
            container.removeChild(container.lastChild); // 最後の子要素を削除
        }
    }
});

// 入力イベント設定の共通処理
function setupInputEvent(parentElement) {
    const elements = [
        { selector: ".hourlyWageInput", name: "hourlyWageInput" },
        { selector: ".totalWorkingHoursInput", name: "totalWorkingHoursInput" },
        { selector: ".holidayDutyInput", name: "holidayDutyInput" },
    ];

    elements.forEach(({ selector, name }) => {
        const element = parentElement ? parentElement.querySelector(selector) : document.querySelector(selector);
        if (element) {
            element.addEventListener("input", (event) => handleInput(event, parentElement));
        }
    });
}

// 入力を処理する関数
function handleInput(event, parentElement) {
    const hourlyWageInput =
        parentElement?.querySelector(".hourlyWageInput") || document.querySelector(".hourlyWageInput");
    const totalWorkingHoursInput =
        parentElement?.querySelector(".totalWorkingHoursInput") || document.querySelector(".totalWorkingHoursInput");
    const holidayDutyInput =
        parentElement?.querySelector(".holidayDutyInput") || document.querySelector(".holidayDutyInput");
    const normalWagesElement = parentElement?.querySelector(".normalWages") || document.querySelector(".normalWages");
    const wageOutput = parentElement?.querySelector(".wageOutput") || document.querySelector(".wageOutput");
    const resultCompensation =
        parentElement?.querySelector(".resultCompensation") || document.querySelector(".resultCompensation");

    // 入力値の取得とデフォルト値設定
    const hourlyWage = parseFloat(hourlyWageInput.value) || 0;
    const totalWorkingHours = parseFloat(totalWorkingHoursInput.value) || 0;
    const holidayDuty = parseFloat(holidayDutyInput.value) || 0;

    // 計算
    const normalWages = hourlyWage * totalWorkingHours;
    const compensation = (hourlyWage + 50) * holidayDuty;
    const result = normalWages + compensation;

    // 結果の表示
    if (normalWagesElement) normalWagesElement.textContent = normalWages.toLocaleString();
    if (resultCompensation) resultCompensation.textContent = compensation.toLocaleString();
    if (wageOutput) wageOutput.textContent = result.toLocaleString();

    // コンソールに表示（デバッグ用）
    console.log(`合計金額: ${result}`);
}
