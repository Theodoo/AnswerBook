// 答案库 - 你可以自由增减
const answers = [
  "是的，勇敢去做吧。",
  "现在还不是时候。",
  "试试看，失败也没关系。",
  "听从你的心。",
  "先睡一觉再说。",
  "宇宙正在为你准备更好的。",
  "不要急，慢慢来。",
  "你已经知道答案了。",
  "换个角度想想呢？",
  "也许该放手了。",
  "值得尝试，但别孤注一掷。",
  "等等，有人要帮你了。",
  "深呼吸，一切都会好起来。",
  "相信直觉，它不会骗你。",
  "再等三天，答案会更清晰。",
  "这不是终点，而是转折点。",
  "你会收到一个好消息。",
  "小心那个微笑不真诚的人。",
  "今天不适合做决定。",
  "走出去，阳光在等你。"
];

// 简单字符串哈希函数（用于每日固定答案）
String.prototype.hashCode = function() {
  let hash = 0;
  for (let i = 0; i < this.length; i++) {
    const char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // 转为32位整数
  }
  return Math.abs(hash);
};

function getAnswer() {
  const questionInput = document.getElementById("question");
  const question = questionInput.value.trim();
  const resultDiv = document.getElementById("result");
  const book = document.getElementById("book");

  if (!question) {
    alert("请先写下你的问题 💬");
    return;
  }

  // 生成基于“问题 + 今天日期”的种子
  const today = new Date().toDateString();
  const seed = (question + today).hashCode();
  const index = seed % answers.length;
  const answer = answers[index];

  // 显示答案并翻页
  resultDiv.textContent = answer;
  book.classList.add("flipped");
}
