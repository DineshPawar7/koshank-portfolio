import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  padding: 40px 20px;
  min-height: 100vh;
`;

const BlogsTitle = styled.h3`
  color: #fe5000;
  text-align: center;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.5rem;
`;

const Description = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BlogCard = styled.div`
  display: flex;
  background: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex: 1;
`;

const Category = styled.h3`
  color: #fe5000;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const CardTitle = styled.h1`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Excerpt = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "MARKETING",
      title: "Digital Marketing Strategies",
      excerpt: "Unlock powerful marketing strategies that drive growth...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytM4phoBOkVhq_ufG7l2GhYx1bSQAEcizaw&s"
    },
    {
      id: 2,
      category: "DESIGNING",
      title: "Web Design Services",
      excerpt: "Transform your online presence with stunning web designs...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_T8FQnEG3N0d-RuXmxqvQZR1a9ai_rAajZg&s"
    },
    {
      id: 3,
      category: "BRANDING",
      title: "Business Branding Tips",
      excerpt: "Build a strong brand identity with expert guidance...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShi4mHp0xu3KHQBe0cigWMik1PVTsX335xZg&s"
    },
    {
      id: 4,
      category: "DESIGNING",
      title: "Logo Design Ideas",
      excerpt: "Create a memorable logo that represents your brand...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4yHYrk8WNZ2QMA1D6TxQ58CiJZaXUx4A7Q&s"
    },
    {
      id: 5,
      category: "SEO",
      title: "SEO and Marketing",
      excerpt: "Boost search engine rankings and attract more customers...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6edurzO0dZyc24hO-EtqZydfvSrtplD1dw&s"
    },
    {
      id: 6,
      category: "BUSINESS",
      title: "Effective Social Media",
      excerpt: "Leverage social media for business growth and engagement...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe76BHWYCHb58-l1AUtdHG76gxNilvgN6Ymw&s"
    }
  ];

  return (
    <SectionContainer>
      <BlogsTitle>Blogs</BlogsTitle>
      <MainTitle>News & Articles</MainTitle>
      <Description>Best Articles to get started</Description>
      
      <CardsContainer>
        {blogs.map(blog => (
          <BlogCard key={blog.id}>
            <CardImage src={blog.image} alt={blog.title} />
            <CardContent>
              <Category>{blog.category}</Category>
              <CardTitle>{blog.title}</CardTitle>
              <Excerpt>{blog.excerpt}</Excerpt>
            </CardContent>
          </BlogCard>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default BlogSection;