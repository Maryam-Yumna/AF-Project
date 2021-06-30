test("GET /conferenceApi/create", async () => {
    const post = await Post.create({ topic: "Front end frameworkds", content: "React js …" });
  
    await supertest(app).get("/conferenceApi/create")
      .expect(200)
      .then((response) => {
        
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
  
        expect(response.body[0]._id).toBe(post.id);
        expect(response.body[0].confName).toBe(post.cofName);
        expect(response.body[0].Description).toBe(post.Description);
          expect(response.body[0].confName).toBe(post.cofName);
        expect(response.body[0].startingDate).toBe(post.Description);
          expect(response.body[0].endDate).toBe(post.endDate);
        expect(response.body[0].year).toBe(post.year);
      });
  });

  