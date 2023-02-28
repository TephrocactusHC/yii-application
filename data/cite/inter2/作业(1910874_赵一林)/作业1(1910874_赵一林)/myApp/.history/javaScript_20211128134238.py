import jieba

def word_separate(str='test test'):
    words = jieba.lcut(str)
    word_dict = {}
    for word in words:
        if word not in word_dict.keys():
            word_dict[word]=1
        else:
            word_dict[word]+=1
    print(word_dict)
word_separate()