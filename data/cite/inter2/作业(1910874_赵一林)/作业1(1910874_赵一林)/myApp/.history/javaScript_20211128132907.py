import eel,jieba
@eel.expose
def word_separate(str):
    words = jieba.lcut(str)
    word_dict = {}
    for word in words:
        if word not in word_dict.keys():
            word_dict[word]=1
        else:
            word_dict[word]+=1
    eel.getdict(word_dict)

if __name__ =='__main__':
    eel.init("D:\MyCode\CodePytorch\charooms-html-master")
    eel.start("room.html")