package com.beom.diary.diary_back.Service;

import com.beom.diary.diary_back.dto.DiaryDto;
import com.beom.diary.diary_back.entity.Diary;
import com.beom.diary.diary_back.repository.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DiaryService {


    @Autowired
    DiaryRepository diaryRepository;

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



    public Diary addImg(DiaryDto diaryDto, MultipartFile file) throws Exception
    {
        Diary addtarget = diaryDto.toEntity();
        String projectpath = System.getProperty("user.dir")+"/src/main/resources/static/files";
        UUID uuid = UUID.randomUUID();
        String filename = uuid+"-"+file.getOriginalFilename();
        File saveFile = new File(projectpath,filename);
        file.transferTo(saveFile);
        addtarget.setImg(filename);
        diaryRepository.save(addtarget);
        return addtarget;
    }

}
