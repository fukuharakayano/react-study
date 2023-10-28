import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  if (inputText) {
    //li生成
    const li = document.createElement("li");
    li.className = "todo-list";
    li.innerText = inputText;

    //完了ボタン生成
    const complateButton = document.createElement("button");
    complateButton.innerText = "完了";
    complateButton.addEventListener("click", () => {
      //押された完了ボタンのdivを未完了リストから削除
      const target = complateButton.parentNode;
      deleteFromIncomplateList(target);
      //完了リストに追加
      const text = target.firstElementChild.innerText;
      //div以下を初期化
      target.textContent = null;
    });

    //削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      //押された削除ボタンのdivを未完了リストから削除
      const deleteTarget = deleteButton.parentNode;
      deleteFromIncomplateList(deleteTarget);
    });

    const todoLists = document.getElementById("todo-lists");
    //todoリストにテキストを追加
    todoLists.appendChild(li);
    //todoリストに完了ボタンを追加
    li.appendChild(complateButton);
    //todoリストに完了ボタンを追加
    li.appendChild(deleteButton);
  }
};

//未完了リストから指定の要素を削除
const deleteFromIncomplateList = (deleteTarget) => {
  document.getElementById("todo-lists").removeChild(deleteTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
