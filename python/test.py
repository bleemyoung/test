# 这是一个简单的Python程序
def main():
    name = input("请输入你的名字: ")
    print(f"你好，{name}! 欢迎学习Python。")
    # 计算并显示1到10的和
    total = sum(range(1, 11))
    print(f"1到10的和是: {total}")

if __name__ == "__main__":
    main()