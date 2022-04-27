package com.beom.diary.diary_back.entity;


import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private String img;

    @Column
    private Date date;

    @Column
    private boolean commit;

    @Column
    private Integer score;

    public void update(Diary diary) {
        if (diary.id != null) {
            this.id = diary.id;
        }
        if (diary.content != null) {
            this.content = diary.content;
        }
        if (diary.title != null) {
            this.title = diary.title;
        }
        if (diary.commit != true) {
            this.commit = diary.commit;
        }
        if (diary.commit != false) {
            this.commit = diary.commit;
        }
        if (diary.img != null) {
            this.img = diary.img;
        }
        if (diary.date != null) {
            this.date = diary.date;
        }
        if (diary.score != null) {
            this.score = diary.score;
        }
    }

}
