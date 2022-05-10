package com.beom.diary.diary_back.Service;

import com.beom.diary.diary_back.dto.DiaryDto;
import com.beom.diary.diary_back.entity.Diary;
import com.beom.diary.diary_back.entity.Image;
import com.beom.diary.diary_back.repository.DiaryRepository;
import com.beom.diary.diary_back.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DiaryService {


    @Autowired
    DiaryRepository diaryRepository;

    @Autowired
    ImageRepository imageRepository;

    //모든 글 가져오기
    public List<Diary> getAll()
    {
        return (List<Diary>) diaryRepository.findAll();
    }

    //ID를 통해 글 가져오기
    public Optional<Diary> getId(Long id)
    {
        return diaryRepository.findById(id);
    }

    //글 추가
    public Diary add(DiaryDto diaryDto)
    {
        Diary addtarget = diaryDto.toEntity();
        diaryRepository.save(addtarget);
        return addtarget;
    }

    //글 수정
    public Diary update(Long id, DiaryDto diaryDto)
    {
        Diary diary = diaryDto.toEntity();
        Diary target = diaryRepository.findById(id).orElse(null);
        target.update(diary);
        Diary updateDiary = diaryRepository.save(target);
        return updateDiary;
    }


    //커밋 했는지 안했는지를 확인하는 함수
    public Diary updateCommit(Long id)
    {

        Diary updateCommitDiary = diaryRepository.findById(id).orElse(null);
        if (updateCommitDiary.isCommit()==true)
        {
            updateCommitDiary.setCommit(false);
        }
        else
        {
            updateCommitDiary.setCommit(true);
        }
        diaryRepository.save(updateCommitDiary);
        return updateCommitDiary;
    }

    //글 삭제
    public void deleteDiary(Long id)
    {
        diaryRepository.deleteById(id);
    }


    public void uploadFile(MultipartFile file) throws IOException {
        file.transferTo(new File("/Users/beom/Documents/Diary_JOB/diary_back/src/main/resources/static/image/"+file.getOriginalFilename()));

    }



    public void uploadForm(String title, String content, MultipartFile file) throws IOException {
        file.transferTo(new File("/Users/beom/Documents/Diary_JOB/diary_back/src/main/resources/static/image/"+file.getOriginalFilename()));
        Image target = new Image();
        target.setId(1L);
        target.setTitle(title);
        target.setContent(content);
        target.setPathname("/Users/beom/Documents/Diary_JOB/diary_back/src/main/resources/static/image/"+file.getOriginalFilename());
        imageRepository.save(target);
    }



}
