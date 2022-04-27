package com.beom.diary.diary_back.dto;

import com.beom.diary.diary_back.entity.Diary;
import lombok.AllArgsConstructor;
import lombok.ToString;
import java.sql.Date;

@ToString
@AllArgsConstructor     //DTO는 모든 변수가 설정
public class DiaryDto {

    private Long id;
    private String title;
    private String content;
    private String img;
    private Date date;
    private boolean commit;
    private Integer score;



    public Diary toEntity()
    {
        return new Diary(id,title,content,img, date, commit,score);
    }


}
