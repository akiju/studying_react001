import "./styles.css";
/**
 * 生成したタスクコンテンツ
 */
var CreateDiv;
var CreateLi;
var CreateButton1;
var CreateButton2;
/**
 * 処理対象タスクコンテンツ
 */
var TargetDiv;
var TargetLi;
var TaegetTaskName;

//** タスク追加ボタンの挙動 */
const onClickAdd = () => {
  //**　未完了ToDo欄にタスク追加 */
  console.log("追加");

  //追加するタスク情報を入力欄から取得し、入力欄を初期化する
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了欄に追加するコンテンツを生成する
  CreateTaskElements(inputtext, 1);

  //完了、削除ボタンのアクションを設定する
  OnClickKanryoButton(CreateButton1);
  OnClickSakujoButton(CreateButton2);

  //未完了欄にタスク追加
  document.getElementById("incomplete-list").appendChild(CreateDiv);
};

//追加ボタンのイベントリスナー
document.getElementById("add-button").addEventListener("click", function () {
  return onClickAdd();
});

/**
 * 未完了、完了リストに追加するタスクアイテムを生成する
 * 生成したアイテムは外部変数へ設定する
 * @param {string} a_AddTaskName 生成するタスク名
 * @param {number} a_ListFlg　生成したタスクを追加する先の欄フラグ（1:未完了欄用、2:完了欄用）
 */
function CreateTaskElements(a_AddTaskName, a_ListFlg) {
  CreateDiv = document.createElement("div");
  CreateDiv.className = "list-row";
  CreateLi = document.createElement("li");
  CreateLi.innerText = a_AddTaskName;

  //未完了リスト用ボタンコンテンツ生成
  if (a_ListFlg == 1) {
    CreateButton1 = document.createElement("button");
    CreateButton1.innerText = "完了";
    CreateButton2 = document.createElement("button");
    CreateButton2.innerText = "削除";

    CreateDiv.appendChild(CreateLi);
    CreateDiv.appendChild(CreateButton1);
    CreateDiv.appendChild(CreateButton2);
    // 完了リスト用
  } else if (a_ListFlg == 2) {
    console.log("Flg = 2");
    CreateButton1 = document.createElement("button");
    CreateButton1.innerText = "戻す";

    CreateDiv.appendChild(CreateLi);
    CreateDiv.appendChild(CreateButton1);
  }
}

/**
 * アクション（処理対象）のタスクを特定する。
 * 特定したコンテンツ情報は外部変数（targetDiv、targetLi、taegetTaskName）に設定される
 * @param {button} a_Button アクションを起こしたタスクに付随するボタンコンテンツ（アクションはボタンから始まるからボタンコンテンツをパラメータにする）
 */
function GetTargetTaskElementsByBtn(a_Button) {
  TargetDiv = a_Button.parentNode;
  TargetLi = TargetDiv.childNodes.item(0);
  TaegetTaskName = TargetLi.innerText;
}

/**
 * 未完了欄の完了ボタンのアクションを設定する
 * @param {button} a_Button リスナーを追加するボタン
 */
function OnClickKanryoButton(a_Button) {
  a_Button.addEventListener("click", () => {
    //完了タスクの情報を取得
    GetTargetTaskElementsByBtn(a_Button);
    //完了欄に入れるコンテンツ生成
    CreateTaskElements(TaegetTaskName, 2);
    //戻すボタンのアクションを設定
    OnClickModosuButton(CreateButton1);
    //完了欄にタスクを入れ、未完了欄のタスクを消す
    document.getElementById("complete-list").appendChild(CreateDiv);
    document.getElementById("incomplete-list").removeChild(TargetDiv);
  });
}

/**
 * 削除ボタンの機能をリスナーに割り当てる
 * @param {*} a_Button 削除ボタンコンテンツ
 */
function OnClickSakujoButton(a_Button) {
  a_Button.addEventListener("click", () => {
    DeleteTask(a_Button, "incomplete-list");
  });
}

/**
 *
 * @param {Element} a_Obj 削除対象タスクに対となるコンテンツ（基本ボタン）
 * @param {string} a_ListName　タスクが存在するリスト名
 */
function DeleteTask(a_Obj, a_ListName) {
  const deleteTarget = a_Obj.parentNode; //親要素＝ div の要素　＝　１行分のオブジェクトを取得
  document.getElementById(a_ListName).removeChild(deleteTarget); //1行分のオブジェクトを削除
}
/**
 * 完了タスク欄の戻すボタンのアクションを設定する
 * @param {button} a_Button　戻すボタンコンテンツ
 */
function OnClickModosuButton(a_Button) {
  a_Button.addEventListener("click", () => {
    //未完了タスク情報を取得
    GetTargetTaskElementsByBtn(a_Button);

    //未完了欄に入れるコンテンツ生成
    CreateTaskElements(TaegetTaskName, 1);

    //完了、削除ボタンのアクションを設定する
    OnClickKanryoButton(CreateButton1);
    OnClickSakujoButton(CreateButton2);

    //未完了欄にタスクを入れ、完了欄のタスクを消す
    document.getElementById("incomplete-list").appendChild(CreateDiv);
    document.getElementById("complete-list").removeChild(TargetDiv);
  });
}
