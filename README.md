## Shyft Assessment

```
    $ baseurl : localhost:4000
```

## 1. Github Reader
###### how it works
To get an organization and its repos


```
/get
$ baseurl/github/read-repo/{organization_name}/{repo_name}
```

## 2. Csv File Reader

###### how it works
To search for any text in the file, 
```
/get
$ baseurl/cv/read-csv/{keyword}

/post
$ baseurl/cv/read-csv
body = {keyword:"enter-keyword-here"}
```